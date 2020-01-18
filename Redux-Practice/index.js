const Redux = require('redux')


const InitiateState = {
    name: "Shawinder"
}


const Reducer = (state = InitiateState, action) =>
{

    const full = { ...state };
    if (action.type === "FULL_NAME") {

        return {

            fullname: full.name + " " + action.val
        }
    }
    return full
}

const store = Redux.createStore(Reducer)


store.subscribe(() =>
{
    console.log("subscribe ", JSON.stringify(store.getState()))
})

store.dispatch({ type: 'FULL_NAME', val: "singh" })
