import React from 'react';
import {Button} from '@material-ui/core';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { newGeneration} from '../genetic/population'
import {addSpeciman, deletePopulation} from '../actions/populationActions'

function NewGeneration(){
  const dispatch = useDispatch()
  
    const population = useSelector(state => {
        return state.population
    })

    const nextGen = () => {
        dispatch(deletePopulation())
        newGeneration(population).map(x => dispatch(addSpeciman(x)))
    }

  return (
    <Button variant="contained" color="primary" onClick={nextGen}>
        Evolve
    </Button>
  );
}

export default NewGeneration;
