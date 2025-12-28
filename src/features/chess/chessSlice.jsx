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
     "black15" : '6,7',
        "white0" : '1,0',
        "white1" : '1,1',
        "white2" : '1,2',
        "white3" : '1,3',
        "white4" : '1,4',
        "white5" : '1,5',
        "white6" : '1,6',
        "white7" : '1,7', 
        "rookwhite0":'0,0',
        "knightwhite1":'0,1',
        "bishopwhite2":'0,2',
        "queenwhite3":'0,3',
        "kingwhite4":'0,4',
        "bishopwhite5":'0,5',
        "knightwhite6":'0,6',
        "rookwhite7":'0,7',
        "rookblack8":'7,0',
        "knightblack9":'7,1',
        "bishopblack10":'7,2',
        "queenblack11":'7,3',
        "kingblack12":'7,4',
        "bishopblack13":'7,5',
        "knightblack14":'7,6',
        "rookblack15":'7,7',
    },
}

export const chessSlice = createSlice({
    name:'map',
    initialState,
    reducers:{
        updateMyPawnMap:(state, action)=>{
            console.log("updating pawn map", action.payload)
            state.myPawnMap[action.payload.id] = action.payload.row + "," + action.payload.col;
        }
    }
})

export const { updateMyPawnMap } = chessSlice.actions;
export default chessSlice.reducer;