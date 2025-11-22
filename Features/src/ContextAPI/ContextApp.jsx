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