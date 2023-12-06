import { createSlice } from '@reduxjs/toolkit'
const initVal ={cards:[
    {id:1, name:"green", status:0},
    {id:2, name:"blue", status:0},
    {id:3, name:"black", status:0},
    {id:4, name:"yellow", status:0}
]}
const cardsSlice = createSlice({
name: "card",
initialState:initVal,
reducers:{
    discover:(state,actions)=>{
        state.cards.find(()=>{

        })
     
    }
    
}
})
export const {discover} = cardsSlice.actions
 
export default cardsSlice.reducer