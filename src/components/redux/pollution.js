import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import data from '../../data/data';

const initialState = {
  data,
  status: 'idle',
};

export const fetchSingleData = createAsyncThunk(
  'aqi-africa/redux/pollution',
  async (obj) => {
    try {
      const { latitude, longitude } = obj;
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=e4277ee92aa2cfce970abfb055b3dde7`
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);
const pollutionSlice = createSlice({
  name: 'pollution slice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSingleData.pending, (state, action) => {
        const st = state;
        st.status = 'pending';
      })
      .addCase(fetchSingleData.fulfilled, (state, action) => {
        const st = state;
        st.status = 'succeeded';
        st.data = st.data.map((obj) => {
          if (
            obj.latitude === action.payload.coord.lat &&
            obj.longitude === action.payload.coord.lon
          ) {
            return {
              ...obj,
              pollInfo: action.payload,
            };
          }
          return obj;
        });
      });
  },
});

export default pollutionSlice;
