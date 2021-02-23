import { ADD_SPECIMAN, SET_SPECIMAN_SCORE, DELETE_POPULATION, SET_SPECIMAN_PLAYING } from "../actions/actionTypes";
import {Progression} from '../genetic/progression'

const initialState = [] ;

const populationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SPECIMAN: {
        return [
          ...state,
          action.payload.speciman
        ];
      }

      case DELETE_POPULATION: {
        return [];
      }

      case SET_SPECIMAN_SCORE:{
        return state.map((item, index) => {
          if (index !== action.payload.index) {
            return item
          }
          return new Progression({
            ...item,
            score: action.payload.score
          })
        })
      }

      case SET_SPECIMAN_PLAYING:{
        return state.map((item, index) => {
          if (index !== action.payload.index) {
            return item
          }
          return new Progression({
            ...item,
            amIPlaying: !state[index].amIPlaying
          })
        })
      }

    default: {
      return state;
    }
  }
};

export default populationReducer;
