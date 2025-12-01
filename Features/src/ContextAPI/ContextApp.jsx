import React from 'react'
import { Input } from './Input'
import { Output } from './Output'
import { CountContext } from './CountContext'

const ContextApp = () => {
    return (
        <CountContext>
            <Input />
            <Output />
        </CountContext>
    )
}

export default ContextApp

// Context solves the prop-drilling problem by letting multiple components share state without passing props manually.

// useReducer solves the problem of complex state logic by centralizing updates in a reducer and making state transitions predictable.

// Using useReducer inside Context solves the biggest performance flaw of Context: unnecessary re-renders. dispatch is stable, state updates are controlled, and large shared state becomes scalable and maintainable — similar to Redux but lighter.