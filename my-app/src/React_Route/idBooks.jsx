import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Drow } from './booksSlice'
import { useParams } from 'react-router-dom'

const IdBooks = () => {

    // const { IdBooks } = useParams()
    // const sliceBooks = useSelector((myStore) => myStore.booksSlice.booksArr)
    // const id1Book = sliceBooks.find(t => String(t.id1Book) === String(id1Book))


    const { id } = useParams()
    const myBooks = useSelector(x => x.booksSlice.booksArr)
    console.log("ss" + myBooks);


    return (
        <>
            <h1>Book {id}</h1>
            {
                myBooks.map((item) => {

                    if (item.id == id) {
                        return (
                            <>
                            

                                <div>the book:{item.nameBook}</div>
                                {/* <div>the author:{item.writer}</div> */}
                                <div>the price:{item.price}</div>
                                <div>the price:{item.writer}</div>
                            </>
                        )
                    }
                })

            }

        </>
    )
}

export default IdBooks