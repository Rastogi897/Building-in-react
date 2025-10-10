import React, { useState } from 'react'

const Accordian = ({ items }) => {
    const [openIndex, setOpenIndex] = useState([]);

    const handleHeaderClicked = (index) => {
        if (openIndex.includes(index)) {
            let updatedIndex = openIndex.filter(id => id != index);
            setOpenIndex(updatedIndex);
        }
        else {
            setOpenIndex([...openIndex, index]);
        }
    }

    return (
        <div>
            {items.map((item, index) => {
                return <div key={index} className='container'>
                    <div className='header'
                        onClick={() => handleHeaderClicked(index)}>{item.header}</div>
                    {openIndex.includes(index) ?
                        <div className='content'>{item.content}</div> : null
                    }
                </div>
            })}
        </div>
    )
}

export default Accordian