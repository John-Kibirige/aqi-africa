import { configureStore } from '@reduxjs/toolkit';
import pollutionSlice from './pollution';

const store = configureStore({
  pollutionData: pollutionSlice.reducer,
});

export default store;