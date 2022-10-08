import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import data from '../data/data';

const initialState = {
  data,
  status: 'idle',
  recentSearch: '',
};

export const fetchData = createAsyncThunk(
  'aqi-africa/redux/pollution',
  async () => {
    const endpoints = initialState.data.map((obj) => {
      const { latitude, longitude } = obj;
      return `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=e4277ee92aa2cfce970abfb055b3dde7`;
    });

    const promises = endpoints.map((point) => axios.get(point));

    return axios.all(promises);
  },
);
const pollutionSlice = createSlice({
  name: 'pollution slice',
  initialState,
  reducers: {
    activateCountry: (state, action) => {
      const st = state;
      st.data = st.data.map((obj) => {
        if (obj.country === action.payload.country) {
          return {
            ...obj,
            active: true,
          };
        }
        return obj;
      });
    },
    updateRecentSearch: (state, action) => {
      const st = state;
      st.recentSearch = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        const st = state;
        st.status = 'pending';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        const st = state;
        st.status = 'succeeded';
        st.data = st.data.map((obj, index) => ({
          ...obj,
          id: nanoid(),
          fetched: action.payload[index].data,
        }));

        // sort the data in state
        st.data = st.data.sort((a, b) => {
          const arr1 = a.fetched.list;
          const arr2 = b.fetched.list;
          return arr2[0].main.aqi - arr1[0].main.aqi;
        });
      });
  },
});

export default pollutionSlice;
export const { updateRecentSearch } = pollutionSlice.actions;
