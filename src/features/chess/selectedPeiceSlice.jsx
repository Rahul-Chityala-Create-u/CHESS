import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    currentPeicePosition:null
}
export const selectedPeiceSLice = createSlice({
    name:'selectedPeice',
    initialState,
    reducers:{
        updateSelectedPeicePosition:(state, action)=>{
            console.log("updating selected peice position", action.payload)
            state.currentPeicePosition = action.payload;
        }
    }
})
export const { updateSelectedPeicePosition } = selectedPeiceSLice.actions;
export default selectedPeiceSLice.reducer;