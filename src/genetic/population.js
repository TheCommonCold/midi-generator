import {createRandomProgression} from '../sound/chords'

export function createPopulation(size) {
    const population = []

    for(let i =0; i<size; i++){
        population.push(createRandomProgression())
    }
    return population
}
