import React,{useState} from "react";


const Btn=()=>{
const [cnt,setCnt]=useState(0);

const func=()=>{
    
    if(cnt==6){
        alert('the cnt come to 6')
        setCnt(0)
    }
    else{
        setCnt(cnt+1)
    }
}
    return(
        <>
        <div>{cnt}</div>

        <button onClick={()=>func()}> click me</button>
        </>
    )
}

export default Btn
