import { createSlice } from '@reduxjs/toolkit'

export const calcSlice = createSlice({
  name: 'counter',
  initialState: {
    MaxPoints: 27,
    UsedPoints: 0,
    Сhars: [
        {name: 'Сила', points: 0},
        {name: 'Ловкость', points: 0},
        {name: 'Выносливость', points: 0},
        {name: 'Интеллект', points: 0},
        {name: 'Мудрость', points: 0},
        {name: 'Харизма', points: 0},
    ]   
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = calcSlice.actions

export default calcSlice.reducer