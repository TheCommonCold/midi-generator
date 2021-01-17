import React from 'react';
import {Button} from '@material-ui/core';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { newGeneration} from '../genetic/population'
import {addSpeciman, deletePopulation} from '../actions/populationActions'

function NewGeneration({updateGeneration, params}){
  const dispatch = useDispatch()
  
    const population = useSelector(state => {
        return state.population
    })

    const nextGen = () => {
        dispatch(deletePopulation())
        newGeneration(population, params.jazziness, params.noteLengths).map(x => dispatch(addSpeciman(x)))
        updateGeneration()
    }

  return (
    <Button variant="contained" color="primary" onClick={nextGen}>
        Evolve
    </Button>
  );
}

export default NewGeneration;
