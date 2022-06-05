import { combineReducers, createStore } from "redux"

import calcSlice from './CalcReducer'

import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
      calc: calcSlice,
  }
})


// let redusers = combineReducers({
//     calculator: CalcReducer,
// });

// let store = createStore(redusers)

// window.store = store

