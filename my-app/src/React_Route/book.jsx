import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Drow } from './booksSlice'
import IdBooks from './idBooks'
import { Outlet, Link } from 'react-router-dom'
 

const Books = (props) => {

    const dispatch = useDispatch()
    const sliceBook=useSelector((myStore)=>myStore.booksSlice.booksArr)
    return (
        <>
        {            
            sliceBook.map((item) => {
                return(
                <div>
                    <div><Link to={`/book/${item.id}`}>לפרטים נוספים</Link></div>
                    <div>{item.nameBook}:</div>                    
                    <div>{item.writer}</div><br></br>                  
                    
                </div>            
                
                )
            })                  
          
        }
          <Outlet />
          
        </>
    )
}

export default Books














