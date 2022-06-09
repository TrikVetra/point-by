import { createSlice } from '@reduxjs/toolkit'

export const calcSlice = createSlice({
  name: 'counter',
  initialState: {
    MaxPoints: 27,
    UsedPoints: 0,
    Сhars: [
        {name: 'Сила', points: 8},
        {name: 'Ловкость', points: 8},
        {name: 'Выносливость', points: 8},
        {name: 'Интеллект', points: 8},
        {name: 'Мудрость', points: 8},
        {name: 'Харизма', points: 8},
    ]   
  },
  reducers: {
    incremented: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.UsedPoints += 1
    },
    decremented: state => {
      state.UsedPoints -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})


// Action creators are generated for each case reducer function
export const { incremented, decremented, incrementByAmount } = calcSlice.actions

export default calcSlice.reducer