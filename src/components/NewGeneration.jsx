import React from 'react';
import {Button} from '@material-ui/core';
import { useSelector } from 'react-redux'

import { newGeneration} from '../genetic/population'

function NewGeneration(){
    const population = useSelector(state => {
        return state.population
    })

    const nextGen = () => {
        newGeneration(population);
    }

  return (
    <Button variant="contained" color="primary" onClick={nextGen}>
        Evolve
    </Button>
  );
}

export default NewGeneration;
