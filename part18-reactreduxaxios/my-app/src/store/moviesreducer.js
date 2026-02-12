import { createSlice } from '@reduxjs/toolkit'

export const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    list : [
      {id:1,title:"Tom & Jerry"},
      {id:2,title:"Twilight"},
      {id:3,title:"Titanic"}
    ]
  },
  reducers: {
    addmovie: (state,action) => {
      // const newmovie = {id:4,title:"3 idots"}
      // state.list = [...state.list,newmovie]

      const newmovie = action.payload
      state.list = [...state.list,newmovie]
    },
  
  }
})
// Action creators are generated for each case reducer function
export const { addmovie } = movieSlice.actions

export default movieSlice.reducer

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