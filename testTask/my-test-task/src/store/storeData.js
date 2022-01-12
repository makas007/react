import { createSlice } from "@reduxjs/toolkit";

const storeData = createSlice({
  name: 'store',
  initialState: {
    flag: false,
    login: 'admin',
    pass: '12345'
  },
  reducers: {
    changeFlag(state, action) { 
      console.log('state');
      console.log(state.flag)
      if (state.login === 'admin' && state.pass === 12345){
        console.log('da');
      }
    }
  }
})

export default storeData.reducer;
export const {changeFlag} = storeData.actions