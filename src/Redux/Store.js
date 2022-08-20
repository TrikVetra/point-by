import calcSlice from './CalcReducer'

import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
      calc: calcSlice.reducer,
  }
})



