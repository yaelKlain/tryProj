import React, { useState } from "react";

const Login = () => {
    const [flagLogin,setFlagLogin]=useState(false)
    const [flagOk,setFlagOk]=useState(true)


    const func = () => {


    }
    return (
        <>


            <button onClick={() => setFlagLogin(true)}>רישום לקורס </button>
            <button onClick={() =>  setFlagOk(false)}> אישור </button>
            
          
            {
                flagLogin == true &&flagOk==true?
                    <div>
                        <input type="text" />
                        <input type="text" />

                    </div>
                    : 
                    null
            }





        </>
    )
}

export default Login