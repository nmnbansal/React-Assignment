import { useState } from 'react';

export function Counter(){
    const [count,setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count+1);
    }

    const handleDecrement = () => {
        setCount(count-1);
    }

    const handleReset = () => {
        setCount(0);
    }

    return(
        <>
        <div>
            <h1>
                Counter App
            </h1>
            <div className='counter'>
            <button onClick={handleDecrement}>-1</button>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>+1</button>
            </div>
            <button onClick={handleReset}>Reset</button>
        </div>
        </>
    )
}