import { configureStore } from '@reduxjs/toolkit';
import storeData from './storeData'

export default configureStore({
  reducer: {
    storeData: storeData
  }
})