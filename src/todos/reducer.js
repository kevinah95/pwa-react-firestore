import {ADD} from './actionTypes'



const initialState = [{
  text: 'Use Redux',
  completed: false,
  id: 0
}];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, {
        id: 1,
        text: action.text,
        completed: false,
      }];
    default:
      return state;
  }
};