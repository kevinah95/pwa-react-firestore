import { combineReducers } from "redux";

function counter(state = { value: 0, limit: 10 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + action.incrementBy };
    case "DECREMENT":
      return { ...state, value: state.value - action.incrementBy };
    case "RESET":
      return { ...state, value: 0 };
    default:
      return state;
  }
}

function createNamedWrapperReducer(reducerFunction, reducerName) {
  return (state, action) => {
    const { name } = action;
    const isInitializationCall = state === undefined;
    if (name !== reducerName && !isInitializationCall) return state;

    return reducerFunction(state, action);
  };
}

function setCounter(state = { value: 0, limit: 10 }, action) {
  switch (action.type) {
    case `INCREMENT_SET_COUNTER`:
      return { ...state, value: state.value + 1 };
    case `DECREMENT_SET_COUNTER`:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}

function timer(state = { isOn: false }, action) {
  switch (action.type) {
    case "START_TIMER":
      return { ...state, isOn: !state.isOn };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counterA: createNamedWrapperReducer(counter, "A"),
  counterB: createNamedWrapperReducer(counter, "B"),
  counterC: createNamedWrapperReducer(counter, "C"),
  timer,
  setA: createNamedWrapperReducer(setCounter,"A"),
  setB: createNamedWrapperReducer(setCounter,"B")
});

export default rootReducer;
