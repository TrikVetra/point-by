import calcSlice from './CalcReducer'

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
      calc: calcSlice,
  }
})

export default store

// let redusers = combineReducers({
//     calculator: CalcReducer,
// });

// let store = createStore(redusers)

// window.store = store

