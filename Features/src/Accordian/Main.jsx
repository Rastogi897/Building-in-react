import React from 'react'
import Accordian from './Accordian'
import "./style.css"

const Main = () => {
    const items = [
        {
            header: 'Item 1',
            content: 'This is content 1'
        },
        {
            header: 'Item 2',
            content: 'This is content 2'
        }, {
            header: 'Item 3',
            content: 'This is content 3'
        }, {
            header: 'Item 4',
            content: 'This is content 4'
        },
    ]

    return (
        <div>
            <Accordian items={items} />
        </div>
    )
}

export default Main