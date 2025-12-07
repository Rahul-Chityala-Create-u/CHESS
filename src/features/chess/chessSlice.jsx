import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    myPawnMap: {
    "black8" : '6,0',
     "black9" : '6,1',
     "black10" : '6,2',
     "black11" : '6,3',
     "black12" : '6,4',
     "black13" : '6,5',
     "black14" : '6,6',
     "black15" : '6,7' 
    },
}

export const chessSlice = createSlice({
    name:'myPawnMap',
    initialState,
    reducers:{
        updateMyPawnMap:(state, action)=>{
            console.log("updating pawn map", action.payload)
        }
    }
})

export const { updateMyPawnMap } = chessSlice.actions;
export default chessSlice.reducer;