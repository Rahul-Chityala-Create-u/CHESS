import {configureStore} from '@reduxjs/toolkit';
import chessReducer from '../features/chess/chessSlice';
import boardReducer from '../features/chess/boardSlice';
import { selectedPeiceSLice } from  '../features/chess/selectedPeiceSlice';

const store = configureStore({
  reducer: {
    Peices: chessReducer,
    Board :boardReducer,
    SelectedPeice: selectedPeiceSLice.reducer,
  },
});

export default store;