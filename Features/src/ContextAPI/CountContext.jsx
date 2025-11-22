import React, { createContext, useReducer, useState } from 'react'

export let Context = createContext();

// useState vs useReducer with Context
// - useState causes the consumers to re-render even if there is not update bcs value is a new object of every render.
// - useReducer fixes that

const initialState = { count: 0 }

const reducer = (state, action) => {
    if (action.type == "inc") {
        return { count: state.count + 1 }
    }
    else if (action.type == "dec") {
        return { count: state.count - 1 }
    }
    else
        return state;
}

export const CountContext = ({ children }) => {
    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}