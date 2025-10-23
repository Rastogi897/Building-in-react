import React, { useState } from "react";
import "./TransferList.css";

const TransferList = () => {
    const [mainListA, setMainListA] = useState(["item1", "item2", "item3", "item4", "item5"]);
    const [mainListB, setMainListB] = useState([]);
    const [leftCheck, setLeftCheck] = useState([]);
    const [rightCheck, setRightCheck] = useState([]);

    const handleChange = (value, checked, side) => {
        const setter = side === "left" ? setLeftCheck : setRightCheck;
        setter(prev => checked ? [...prev, value] : prev.filter(item => item !== value));
    };

    const transferLtoR = () => {
        setMainListB(prev => [...prev, ...leftCheck]);
        setMainListA(prev => prev.filter(item => !leftCheck.includes(item)));
        setLeftCheck([]);
    };

    const transferRtoL = () => {
        setMainListA(prev => [...prev, ...rightCheck]);
        setMainListB(prev => prev.filter(item => !rightCheck.includes(item)));
        setRightCheck([]);
    };

    return (
        <div className="container">
            <div className="header">
                <div>Item List A</div>
                <div>
                    <button onClick={transferLtoR} disabled={!leftCheck.length}>{">>>"}</button>
                    <button onClick={transferRtoL} disabled={!rightCheck.length}>{"<<<"}</button>
                </div>
                <div>Item List B</div>
            </div>

            <div className="body">
                <div>
                    {mainListA.map((data) => (
                        <div key={data}>
                            <input
                                id={data}
                                type="checkbox"
                                value={data}
                                checked={leftCheck.includes(data)}
                                onChange={(e) => handleChange(data, e.target.checked, "left")}
                            />
                            <label htmlFor={data}>{data}</label>
                        </div>
                    ))}
                </div>

                <div>
                    {mainListB.map((data) => (
                        <div key={data}>
                            <input
                                id={data}
                                type="checkbox"
                                value={data}
                                checked={rightCheck.includes(data)}
                                onChange={(e) => handleChange(data, e.target.checked, "right")}
                            />
                            <label htmlFor={data}>{data}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TransferList;
