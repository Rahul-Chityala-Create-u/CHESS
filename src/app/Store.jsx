import {configureStore} from '@reduxjs/toolkit';
import {chessSlice} from '../features/chess/chessSlice';
import {boardSlice} from '../features/chess/boardSlice';
import { selectedPeiceSLice } from  '../features/chess/selectedPeiceSlice';
// import {peiceMapSlice} from '../features/chess/peiceMap.jsx';

const store = configureStore({
  reducer: {
    Peices: chessSlice.reducer,
    Board :boardSlice.reducer,
    SelectedPeice: selectedPeiceSLice.reducer,
    // pawnsmap: peiceMapSlice.reducer,
  },
});

export default store;