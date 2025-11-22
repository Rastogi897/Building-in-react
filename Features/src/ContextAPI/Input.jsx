import React, { useContext } from 'react'
import { Context } from './CountContext'

export const Input = () => {

    // const { count, setCount } = useContext(Context);
    const { state, dispatch } = useContext(Context);

    return (
        <div>
            {/* <div onClick={() => setCount(prev => prev + 1)}>+</div> */}
            {/* <div onClick={() => setCount(prev => prev - 1)}>-</div> */}
            <div onClick={() => dispatch({ type: "inc" })}>+</div>
            <div onClick={() => dispatch({ type: "dec" })}>-</div>
        </div>
    )
}
