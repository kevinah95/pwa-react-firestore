import { combineReducers } from "redux";

function createCounterWithNamedType(counterName = '') {
    return function counter(state = 0, action) {
        switch (action.type) {
            case `INCREMENT_${counterName}`:
                return state + action.incrementBy;
            case `DECREMENT_${counterName}`:
                return state - action.incrementBy;
            default:
                return state;
        }
    }
}

function timer(state = {isOn:false}, action) {
    switch(action.type){
        case 'START_TIMER': return {...state, isOn: !state.isOn};
        default: return state;
    }
    
}

const rootReducer = combineReducers({
    counterA : createCounterWithNamedType('A'),
    counterB : createCounterWithNamedType('B'),
    counterC : createCounterWithNamedType('C'),
    timer
});

export default rootReducer;