import React, { useState, useRef, useEffect } from 'react'
import './otpStyle.css'

const OTP = () => {
    const [inputs, setInputs] = useState(['', '', '', '', '', ''])
    const inputRefs = useRef([]);

    useEffect(() => {
        inputRefs.current[0].focus();
    }, [])

    const handleInput = (e, index) => {
        const value = e.target.value;
        const newInput = [...inputs];
        newInput[index] = value;
        setInputs(newInput);

        inputRefs.current[index + 1].focus();
    }

    const handleDelete = (e, index) => {
        if (e.key == "Backspace") {
            // this is to prevent the default delete behavious done by the browser
            e.preventDefault();


            if (inputs[index] === "" && index > 0) {
                inputRefs.current[index - 1].focus();
            }
            else {
                const newInput = [...inputs];
                newInput[index] = ""
                setInputs(newInput)
            }
        }
    }

    return (
        <div className='otp-container'>
            {
                inputs.map((value, index) => {
                    return <div className='input-container' key={index}>
                        <input
                            value={value}
                            ref={(ele) => (inputRefs.current[index] = ele)}
                            onChange={(e) => handleInput(e, index)}
                            onKeyDown={(e) => handleDelete(e, index)}
                        />
                    </div>
                })
            }
        </div>
    )
}

export default OTP