import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
     console.log(action)
      state.value += action.payload
    }
  }
})
console.log(counterSlice);
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

// =In Terminal
// datalandcourses\reactjsbatch1\path12\my-app\src\store> node reducer.js
// {
//   name: 'counter',
//   reducer: [Function: reducer],
//   actions: {
//     increment: [Function: actionCreator] {        
//       toString: [Function (anonymous)],
//       type: 'counter/increment',
//       match: [Function (anonymous)]
//     },
//     decrement: [Function: actionCreator] {        
//       toString: [Function (anonymous)],
//       type: 'counter/decrement',
//       match: [Function (anonymous)]
//     },
//     incrementByAmount: [Function: actionCreator] {
//       toString: [Function (anonymous)],
//       type: 'counter/incrementByAmount',
//       match: [Function (anonymous)]
//     }
//   },
//   caseReducers: {
//     increment: [Function: increment],
//     decrement: [Function: decrement],
//     incrementByAmount: [Function: incrementByAmount]
//   },
//   getInitialState: [Function: getInitialState],
//   reducerPath: 'counter',
//   getSelectors: [Function: getSelectors],
//   selectors: {},
//   selectSlice: [Function: selectSlice],
//   injectInto: [Function: injectInto]
// }