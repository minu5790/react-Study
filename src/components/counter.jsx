import React, { useState } from 'react';

const Counter = () => {
    const [num, setNum]= useState(0)

    return (
        <div className="counter">
            <h1>My counter</h1>
            <p>{num}</p>
            <button onClick={()=>setNum(num+1)}>+</button>
            <button onClick={()=>setNum(num-1)}>-</button>
        </div>
    )
}

export default Counter;