import { createStore } from "redux";

const reducer = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT_FIRST': return state + 1;
        case 'INCREMENT_SECOND': return state + 1;
        default: return state;
    }
}


let store = createStore(reducer);


export default store;
