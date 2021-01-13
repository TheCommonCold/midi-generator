import {createRandomProgression, Progression} from './progression'
import { Genome } from './genome'
import { Note } from './note'
import {scales, chords} from './chords'

export function createPopulation(size,jazziness, numberOfNotes, noteLengths) {
    const population = []

    for(let i =0; i<size; i++){
        population.push(createRandomProgression(jazziness, numberOfNotes, noteLengths))
    }
    return population
}

export function newGeneration(population){
    let newPopulation = []
    for(let i = 0; i<population.length; i++){
        const roulette = createRoulette(population.map(x => x.score))

        const pick1 = pickSpeciman(roulette)
        const pick2 = pickSpeciman(roulette)

        const spec1 = population[pick1]
        const spec2 = population[pick2]
    
        const crossed = cross(spec1,spec2)
        newPopulation.push(crossed)
    }
    return newPopulation
}

function createRoulette(scores){
    const max = scores.reduce((a, b) => a + b);
    const probabilities = scores.map(score => score/max)
    return probabilities
}

function pickSpeciman(roulette){
    const pick = Math.random();
    let acc = 0
    let i = 0
    while(acc<pick){
        acc += roulette[i]
        i++
    }
    return i-1
}

export function cross(prog1, prog2){
    const max = Math.max(prog1.genome.scale, prog2.genome.scale)
    const min = Math.min(prog1.genome.scale, prog2.genome.scale)

    const newScale = Math.floor(Math.random() * (max - min)) + min;

    const prog1Transposed = prog1.transpose(newScale)
    const prog2Transposed = prog2.transpose(newScale)

    const length = 8
    const newRythm = crossRythms(prog1Transposed.getAllNotes(), prog2Transposed.getAllNotes(), length)

    const newMelody = crossMelodies(prog1Transposed, prog2Transposed, newRythm, newScale, prog1.notes[0].chord.length,3)

    let notes = [] 
    let beginning = 0
    for(let i = 0; i<newRythm.length; i++){
        const chord = newMelody[i]
        notes.push({chord: chord.chord.map(x=>new Note(x,beginning, newRythm[i])), root: new Note(chord.root,beginning, newRythm[i])}) // eslint-disable-line
        beginning+=newRythm[i]
    }
        
    const genome = new Genome(notes, newRythm, newScale)
    return new Progression({notes: notes, rythm: newRythm, genome: genome })
}

function crossMelodies(notes1, notes2, newRythm, originalScale, numberOfNotes, jazziness){
    let newTimeline = 0
    let newChords = []
    for(let i=0; i<newRythm.length; i++){
        const window=[newTimeline, newTimeline+newRythm[i]]

        let candidates = []
        notes1.notes.forEach(chord => {
            if(chord.root.existsInWindow(window))
                return candidates.push(chord.root)
            return null
        })

        notes2.notes.forEach(chord => {
            if(chord.root.existsInWindow(window))
                return candidates.push(chord.root)
            return null
        })

        candidates =  [...new Set(candidates)]

        const choice = Math.floor(Math.random()*candidates.length)
        const root = candidates[choice].hight

        candidates = []
        notes2.notes.forEach(chord => {
            chord.chord.forEach(note => {
            if(note.existsInWindow(window))
                return candidates.push(note)
            return null
            })
        })

        notes1.notes.forEach(chord => {
            chord.chord.forEach(note => {
            if(note.existsInWindow(window))
                return candidates.push(note)
            return null
            })
        })

        candidates =  [...new Set(candidates)]

        const scale = scales['major']
        const transposedRoot = (root-originalScale)%12
        const mode = scale.mode[scale.notes.indexOf(transposedRoot)]

        let chord = []
        let overload=0
        for(let j = 0 ; j<numberOfNotes; j++ ){
            //const choice = Math.floor(Math.random() * jazziness + Math.floor(overload/(jazziness*2)))
            const choice = candidates[Math.floor(Math.random()*candidates.length)].hight
            if (chord.includes(choice) || !chords[mode].slice(0,jazziness + Math.floor(overload/(jazziness*2))).includes(((choice-root)%12)))
            {
                overload++
                j--
                continue
            }
            overload=0
            chord.push(choice)
        }
        newChords.push({chord,root})
        newTimeline += newRythm[i]
    }
    return newChords
}

function crossRythms(notes1, notes2, length){
    let newRythm = []
    let timeline = 0
    let ends = [notes1.map(note => note.end).sort(),notes2.map(note => note.end).sort()]

    while(timeline<length){
        let choice = Math.round(Math.random())
        for(let i = 0; i< ends[choice].length; i++){
            if(ends[choice][i]>timeline){
                newRythm.push(ends[choice][i]-timeline)
                timeline = ends[choice][i]
                break;
            }
            if(i===ends[choice].length-1){
                newRythm.push(ends[choice][i]-timeline)
                timeline = ends[choice][i]
            }
        }
    }
    return newRythm
}
