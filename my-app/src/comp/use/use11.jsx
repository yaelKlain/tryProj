import React, { useState } from 'react'
import useMath from "./use1";


const CustomHook = () => {

    const [solution, setSolution] = useState(0)

    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)



    const changeInput = (e) => {
        console.log(e.target.value);
        setNum1(e.target.value)

    }
    const changeInput2 = (e) => {
        console.log(e.target.value);
        setNum2(e.target.value)

    }
    return (
        <>
            <input onChange={(e) => changeInput(e)} type="number" />
            <input onChange={(e) => changeInput2(e)} type="number" />

            <button onClick={useMath(num1,num2,"+",setSolution).calc}>+</button>
            <button onClick={useMath(num1,num2,"-",setSolution).calc}>-</button>
            <button onClick={useMath(num1,num2,"*",setSolution).calc}>*</button>
            <button onClick={useMath(num1,num2,"/",setSolution).calc}>/</button>
            <p>{solution}</p>
            


        </>
    )
}

export default CustomHook







