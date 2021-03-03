import React from 'react';
import {Button} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { newGeneration} from '../genetic/population'
import {addSpeciman, deletePopulation} from '../actions/populationActions'

function NewGeneration({updateGeneration, params}){
  const dispatch = useDispatch()
  
    const population = useSelector(state => {
        return state.population
    })

    const nextGen = () => {
        dispatch(deletePopulation())
        newGeneration(population, params.populationSize, params.jazziness, {min:params.windowmin,max:params.windowmax},params.progressionLength, params.mutationChance).map(x => dispatch(addSpeciman(x)))
        updateGeneration()
    }

  return (
    <Button className='m-1' variant="contained" color="primary" onClick={nextGen}>
        KOLEJNA GENERACJA  <ArrowForwardIcon/>
    </Button>
  );
}

export default NewGeneration;
