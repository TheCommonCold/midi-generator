import { ADD_SPECIMAN, SET_SPECIMAN_SCORE, DELETE_POPULATION } from "./actionTypes.js";

export const addSpeciman = (speciman) => ({ 
    type: ADD_SPECIMAN, 
    payload: { speciman } 
});

export const setSpecimanScore = ( {index, score} ) => ({ 
    type: SET_SPECIMAN_SCORE, 
    payload: { index, score } 
});

export const deletePopulation = ( ) => ({ 
    type: DELETE_POPULATION
});