import React, { useState,useReducer } from 'react'

const EmpReducer = () => {
    const initialState = [{
        details: '',
        hour: Date.now(),
        isComplete: false
    }]



    const taskFunc = (state, action) => {
       
        switch (action.type) {
            case "Add":
                return [...state,{ details: action.text, hour: Date.now(),isComplete:false}]
                   
              

            default:
                break;
        }
    }
    const [onChangeInp,setOnChangeInp]=useState('')

    const handleChange = (key, val) => {
        dispatch({ type: key, text:val })
    }
    const [task, dispatch] = useReducer(taskFunc, initialState)
    return (
        <>
         <button onClick={()=>handleChange("Add",onChangeInp)}>
            add
        </button>
            <input onChange={(e) => setOnChangeInp(e.target.value)} />
            { <div>{
                

            task.map((e)=>{
                
               return(
                <>               

              <p>{e.details}</p>
               <p>{e.hour}</p>
               <input type="checkbox" />

               </>
              )

            })
         }
            </div> }
            
        </>

        
    )


}

export default EmpReducer