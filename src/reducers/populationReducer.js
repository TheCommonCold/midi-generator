import { ADD_SPECIMAN } from "../actions/actionTypes";

const initialState = [] ;

const populationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SPECIMAN: {
        return [
          ...state,
          action.payload.speciman
        ];
      }
    default: {
      return state;
    }
  }
};

export default populationReducer;
