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
            '{"tocolumn":1,"torow":4,"fromcol":1,"fromrow":6,"value":1}'

            state.board[action.payload.torow][action.payload.tocolumn] = action.payload.value;
            state.board[action.payload.fromrow][action.payload.fromcol] = 0;
        }
    }
})

export const { updateBoard } = boardSlice.actions;
export default boardSlice.reducer;