import { ADD_SPECIMAN, SET_SPECIMAN_SCORE } from "../actions/actionTypes";

const initialState = [] ;

const populationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SPECIMAN: {
        return [
          ...state,
          action.payload.speciman
        ];
      }

      case SET_SPECIMAN_SCORE:{
        return state.map((item, index) => {
          if (index !== action.payload.index) {
            return item
          }
          return {
            ...item,
            score: action.payload.score
          }
        })
      }

    default: {
      return state;
    }
  }
};

export default populationReducer;
