import { ADD_SPECIMAN } from "./actionTypes.js";

export const addSpeciman = (speciman) => ({ 
    type: ADD_SPECIMAN, 
    payload: { speciman } 
});
