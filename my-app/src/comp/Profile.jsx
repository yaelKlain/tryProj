import React from "react";
import { useSelector } from "react-redux";

const Profile =()=>{

    
const user = useSelector((state)=>state)
console.log(user);
    return(
        <>
             
            {user.user.map((item) => (
                <div key={item.name}>
                    <p>Name: {item.name}</p>
                    <p>Email: {item.classes}</p>
                    <p>Teacher Name: {item.techerName}</p>
                    
                    
                </div>
            ))}
        </>
    )
}

export default Profile