import React, { useRef, useState } from 'react'

const Debounce = () => {

    const [clickCount, setClickCount] = useState(0);
    const [callCount, setCallCount] = useState(0);

    let timer = useRef(null);
    const debounce = () => {
        if (timer.current) clearInterval(timer.current);

        timer.current = setTimeout(() => {
            setCallCount(prev => prev + 1)
        }, 800)
    }

    const handleClick = () => {
        setClickCount(prev => prev + 1);
        debounce();
    }

    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <div>{clickCount}</div>
            <div>{callCount}</div>
        </div>
    )
}

export default Debounce