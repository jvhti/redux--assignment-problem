import * as actionTypes from '../store/actions';

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      return {...state, persons: state.persons.concat(action.payload)};
    case actionTypes.DELETE_PERSON:
      return {...state, persons: state.persons.filter(p => p.id !== action.id)};
    default:
      return state;
  }
};

export default reducer;
