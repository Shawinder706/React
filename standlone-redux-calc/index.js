const Redux = require('redux')

//create state
const createStore = Redux.createStore;
const initialState = {
    x: 120,
    y: 30,
    calc: 0
}

const Reducer = (state = initialState, action) =>
{

    if (action.type === 'ADDITION') {
        return {
            ...state,
            calc: state.x + state.y
        }
    }
    if (action.type === 'SUBTRACT') {
        return {
            ...state,
            calc: state.x - state.y
        }
    }
    if (action.type === 'MULTIPLY') {
        return {
            ...state,
            calc: state.x * state.y
        }
    }
    if (action.type === 'DIVISION') {
        return {
            ...state,
            calc: state.x / state.y
        }
    }
    return state;
}

const store = createStore(Reducer)
console.log(store.getState());

store.subscribe(() =>
{
    console.log('subscription : ', store.getState());
})

store.dispatch({ type: 'ADDITION' })
store.dispatch({ type: 'SUBTRACT' })
store.dispatch({ type: 'MULTIPLY' })
store.dispatch({ type: 'DIVISION' })


