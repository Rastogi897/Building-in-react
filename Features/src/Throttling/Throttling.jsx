import React, { useState, useRef } from 'react'

const Throttling = () => {
    const [clickCount, setClickCount] = useState(0);
    const [callCount, setCallCount] = useState(0);

    let timer = useRef(false);

    const throttle = () => {
        if (timer.current) return;
        timer.current = true;

        setTimeout(() => {
            setCallCount(prev => prev + 1)
            timer.current = false;
        }, 500)
    }

    const handleClick = () => {
        setClickCount(prev => prev + 1);
        throttle();
    }

    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <div>{clickCount}</div>
            <div>{callCount}</div>
        </div>
    )
}

export default Throttling