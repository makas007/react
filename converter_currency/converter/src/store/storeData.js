import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllRates = createAsyncThunk(
  'getAllRates',
  async function() {
    return axios.get('https://www.cbr-xml-daily.ru/latest.js').then((responce) => responce.data.rates)
  }
)

const storeData = createSlice({
  name: 'myStore',
  initialState: {
    allCurrencies: {}
  },
  reducers:{
    currencies(state, action){
      console.log(state, action);
    }
  },
  extraReducers: {
    [getAllRates.fulfilled]: (state, action) => {
      console.log('resolved');
      console.log(action.payload);
      state.allCurrencies = action.payload;
    }
  }
})

export default storeData.reducer;
export const {allCurrencies} = storeData.actions