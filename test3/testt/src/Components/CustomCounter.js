import React, {useState} from 'react';

const CustomCounter = () => {
    
    const [count, setCount] = useState(0);
    const plusCount = () =>{
        setCount(count+1);
    }
    const minusCount = () =>{
        setCount(count-1);
    }
    return(
        <div>
            현재수 : {count}<br />
            <button onClick={plusCount}> Plus </button>
            <button onClick={minusCount}> Minus </button>
        </div>
    )
}

export default CustomCounter;