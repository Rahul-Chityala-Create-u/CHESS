import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    currentPeicePosition:null,
    peiceId:null,
    player:null,
}
export const selectedPeiceSLice = createSlice({
    name:'selectedPeice',
    initialState,
    reducers:{
        updateSelectedPeicePosition:(state, action)=>{
            console.log("updating selected peice position", action.payload.position)
            state.currentPeicePosition = action.payload.position;
            state.peiceId = action.payload.id;
            state.player = action.payload.player;
        }
    }
})
export const { updateSelectedPeicePosition } = selectedPeiceSLice.actions;
export default selectedPeiceSLice.reducer;