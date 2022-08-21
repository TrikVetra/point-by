import { createSlice } from '@reduxjs/toolkit'

export const calcSlice = createSlice({
  name: 'counter',
  initialState: {
    MaxPoints: 27,
    UsedPoints: 0,
    Stats: [
        {label: 'Сила', name: 'Str', points: 8},
        {label: 'Ловкость', name: 'Dex', points: 8},
        {label: 'Выносливость', name: 'Sta', points: 8},
        {label: 'Интеллект', name: 'Int', points: 8},
        {label: 'Мудрость', name: 'Wis', points: 8},
        {label: 'Харизма', name: 'Cha', points: 8},
    ]   
  },
  reducers: {
    increment: (state, payload) => {
      state.UsedPoints += 1
    },
    decrement: (state, payload) => {
      state.UsedPoints -= 1
    },
  }

})

// Action creators are generated for each case reducer function
export const { increment, decrement } = calcSlice.actions

export default calcSlice