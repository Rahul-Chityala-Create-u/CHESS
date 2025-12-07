import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    board: [
    [10,7,5,12,20,5,7,10],
    [1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1],
    [10,7,5,12,20,5,7,10]
]
}

export const boardSlice = createSlice({
    name:'board',
    initialState,
    reducers:{
        updateBoard:(state, action)=>{
            console.log("updating board", action.payload)
        }
    }
})

export const { updateBoard } = boardSlice.actions;
export default boardSlice.reducer;