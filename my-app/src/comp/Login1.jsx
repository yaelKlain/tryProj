import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const StudentLogin = () => {
    const [name, setNmae] = useState("")
    const [classes, setClasses] = useState("")
    const [techerName, setTecherName] = useState("")
    const student={name,techerName}

    const dispatch = useDispatch()
    const addStudent = () => {
        
        // const userData = {
        //     name,
        //     classes,
        //     techerName
        // }
        dispatch({ type: "createUser", payload: student })
    }
    
    const removeStudent = () => {
        
        // const userData = {
        //     name,
        //     classes,
        //     techerName
        // }
        dispatch({ type: "removeUser", payload: student })
    }
    
    return (
        <>
        

            <input onChange={(e) => setNmae(e.target.value)} />
            <input onChange={(e) => setClasses(e.target.value)} />
            <input onChange={(e) => setTecherName(e.target.value)} />

            <button onClick={() => addStudent()}>add</button>
            <button onClick={() => removeStudent()}>remove</button>
          
        </>
    )
}

export default StudentLogin