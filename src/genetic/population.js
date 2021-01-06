import {createRandomProgression} from '../sound/chords'

export function createPopulation(size,jazziness, numberOfNotes) {
    const population = []

    for(let i =0; i<size; i++){
        population.push({notes: createRandomProgression(jazziness, numberOfNotes), score: 0})
    }
    return population
}
