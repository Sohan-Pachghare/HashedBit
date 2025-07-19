import React, { useState } from 'react'
import './calculator.css'
const Calculator = () => {
    const [display, setDisplay] = useState("");
    function hdlClick(val) {
        try {
            if (val === 'C') {
                setDisplay(() => "");
            }
            else if (val === "=") {
                setDisplay((prev) => eval(prev));
            } else {
                setDisplay((prev) => prev + val)
            }
        } catch(err) {
            setDisplay("");
            console.log(err);
        }
    }
    return (
        <div className='grid grid-cols-4 gap-3'>

            <div className="display col-span-4 text-3xl">{display || 0}</div>

            <button className='btn' onClick={() => hdlClick(7)}>7</button>
            <button className='btn' onClick={() => hdlClick(8)}>8</button>
            <button className='btn' onClick={() => hdlClick(9)}>9</button>
            <button className='btn' onClick={() => hdlClick('/')}>/</button>

            <button className='btn' onClick={() => hdlClick(4)}>4</button>
            <button className='btn' onClick={() => hdlClick(5)}>5</button>
            <button className='btn' onClick={() => hdlClick(6)}>6</button>
            <button className='btn' onClick={() => hdlClick('*')}>x</button>

            <button className='btn' onClick={() => hdlClick(1)}>1</button>
            <button className='btn' onClick={() => hdlClick(2)}>2</button>
            <button className='btn' onClick={() => hdlClick(3)}>3</button>
            <button className='btn' onClick={() => hdlClick('-')}>-</button>

            <button className='btn' onClick={() => hdlClick(0)}>0</button>
            <button className='btn' onClick={() => hdlClick('.')}>.</button>
            <button className='btn' onClick={() => hdlClick('=')}>=</button>
            <button className='btn' onClick={() => hdlClick('+')}>+</button>

            <button className='btn col-span-4' onClick={() => hdlClick('C')}>Clear</button>

        </div>
    )
}


export default Calculator