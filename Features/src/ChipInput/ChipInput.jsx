import React, { useState } from 'react'
import "./ChipInput.css"

const ChipInput = () => {
    const [chips, setChips] = useState([]);
    const [chipText, setChipText] = useState("");

    const handleAdd = () => {
        if (chipText.trim().length > 0)
            setChips([...chips, chipText]);

        setChipText("");
    }

    const handleRemoveChip = (index) => {
        const newChipArray = chips.filter((data, i) => index != i);
        setChips(newChipArray);
    }

    return (
        <div className='parent'>
            <h1>Chip Component</h1>
            <div>
                <input
                    type='text'
                    value={chipText}
                    onChange={(e) => {
                        setChipText(e.target.value)
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleAdd();
                    }}
                />
                <button onClick={handleAdd}>Add</button>
            </div>
            <div className='clips-container'>
                {
                    chips.map((data, index) => {
                        return (
                            <div className='clips'>
                                <div>{data}</div>
                                <button
                                    className='clip-button'
                                    onClick={() => handleRemoveChip(index)}
                                >x</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ChipInput