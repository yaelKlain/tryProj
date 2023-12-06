import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from './Card'

const Game = () => {

    const myCards = useSelector(x=>x.cardsSlice.cards)
    const dispatch = useDispatch()

    return (
        <>
             {
             myCards.map((item) => {
                return(
                    <Card id={item.id} name={item.name} status={item.status}/>
                )               
             }  )               
           
            }
        </>             
    )
}
export default Game