import {createRandomProgression, Progression} from './progression'
import { Genome } from './genome'
import { Note } from './note'

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
    const newRythm = crossRythms(prog1Transposed.notes2, prog2Transposed.notes2, length)

    const newMelody = crossMelodies(prog1Transposed, prog2Transposed, newRythm)

    let notes = [] 
    let beginning = 0
    for(let i = 0; i<newRythm.length; i++){
        notes.push(new Note(newMelody[i][0],beginning, newRythm[i]))
        beginning+=newRythm[i]
    }
    const genome = new Genome(newMelody, newRythm, newScale)
    const progression  = new Progression({notes: newMelody, rythm: newRythm, genome: genome,  notes2: notes})
    return progression
}

function crossMelodies(prog1, prog2, newRythm){
    let newTimeline = 0
    let chords = []
    for(let i=0; i<newRythm.length; i++){
        const window=[newTimeline, newTimeline+newRythm[i]]

        let candidates = []

        prog1.notes2.map(note => {
            if(note.existsInWindow(window))
                return candidates.push(note.hight)
            return null
        })

        prog2.notes2.map(note => {
            if(note.existsInWindow(window))
                return candidates.push(note.hight)
            return null
        })

        newTimeline += newRythm[i]

        candidates =  [...new Set(candidates.flat())]

        const choice = Math.floor(Math.random()*candidates.length)

        chords.push([candidates[choice]])
    }
    return chords
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
