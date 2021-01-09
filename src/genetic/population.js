import {createRandomProgression} from '../sound/chords'
import { calcGenome } from './genome'

export function createPopulation(size,jazziness, numberOfNotes, noteLengths) {
    const population = []

    for(let i =0; i<size; i++){
        population.push({...createRandomProgression(jazziness, numberOfNotes, noteLengths),score: 50})
    }
    return population
}

export function newGeneration(population){

    const roulette = createRoulette(population.map(x => x.score))

    const spec1 = population[pickSpeciman(roulette)]
    const spec2 = population[pickSpeciman(roulette)]

    const crossed = cross(spec1,spec2)
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

    const length = 8
    const newRythm = crossRythms(prog1.rythm, prog2.rythm, length)

    const newMelody = crossMelodies(prog1, prog2, newRythm)

    return {notes: newMelody, rythm: newRythm, genome: calcGenome(newMelody, newRythm, newScale) ,score:50}
}

function crossMelodies(prog1, prog2, newRythm){
    let timeline1 = 0
    let timeline2 = 0
    let newTimeline = 0
    let i1 = 0
    let i2 = 0
    let chords = []
    for(let i=0; i<newRythm.length; i++){
        const window=[newTimeline, newTimeline+newRythm[i]]

        let candidates = []
        while(window[1]>=timeline1 && i1<prog1.rythm.length){
            const notes = [...new Set(prog1.notes[i1].flat())]
            candidates.push(notes)
            timeline1+=prog1.rythm[i1]
            i1++
        }

        while(window[1]>=timeline2 && i2<prog2.rythm.length){
            const notes = [...new Set(prog2.notes[i2].flat())]
            candidates.push(notes)
            timeline2+=prog2.rythm[i2]
            i2++
        }
        newTimeline += newRythm[i]

        candidates =  [...new Set(candidates.flat())]

        const choice = Math.floor(Math.random()*candidates.length)

        chords.push([candidates[choice]])
    }
    return chords
}

function crossRythms(rythm1, rythm2, length){
    let timeline1 = 0
    let timeline2 = 0
    let newTimeline = 0
    let newRythm = []
    let i1 = 0
    let i2 = 0
    let i = 0
    while(newTimeline<length){
        let choice
        if(Math.random()<0.5){
            choice=0
        }else {
            choice=1
        }

        if (choice===0){
            if(newTimeline<=timeline2){
                if(newTimeline>timeline1){
                    if(i>=Math.max(i1,i2)) continue
                    const diff = newTimeline-timeline1
                    newRythm[newRythm.length-1]-=diff
                    newRythm.push(diff)
                    i++
                }else{
                    newRythm.push(rythm1[i1])
                    i++
                    newTimeline += rythm1[i1]
                }
            }
        } else {
            if(newTimeline<=timeline1){
                if(newTimeline>timeline2){
                    if(i>=Math.max(i1,i2)) continue
                    const diff = newTimeline-timeline2
                    newRythm[newRythm.length-1]-=diff
                    newRythm.push(diff)
                    i++
                }else{
                    newRythm.push(rythm2[i2])
                    i++
                    newTimeline += rythm2[i2]
                }
            }
        }
        if(newTimeline>timeline1){
            timeline1+=rythm1[i1]
            if(i1<rythm1.length-1)
                i1++
        }
        if(newTimeline>timeline2){
            timeline2+=rythm2[i2]
            if(i2<rythm2.length-1)
                i2++
        }
    }
    if(newTimeline>length){
        newRythm[newRythm.length-1] -= newTimeline-length
    }
    return newRythm
}