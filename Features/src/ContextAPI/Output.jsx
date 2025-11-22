import React, { useContext } from 'react'
import { Context } from './CountContext'

export const Output = () => {
    // const { count, setCount } = useContext(Context)
    const { state, dispatch } = useContext(Context);
    return (
        <div>{state.count}</div>
    )
}
