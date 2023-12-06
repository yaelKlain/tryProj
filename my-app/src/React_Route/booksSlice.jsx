import { createSlice } from '@reduxjs/toolkit'
const initVal = {
    booksArr: [
        { nameBook: "my-life", writer: "maya", id: 0, price: 43 },
        { nameBook: "children-about-themself", writer: "rachel", id: 1, price: 76 },
        { nameBook: "gig-boys", writer: "chava", id: 2, price: 89 }

    ]
}
const booksSlice = createSlice({
    name: "books",
    initialState: initVal,
    reducers: {
        
        

    }
})
export const { Drow } = booksSlice.actions

export default booksSlice.reducer