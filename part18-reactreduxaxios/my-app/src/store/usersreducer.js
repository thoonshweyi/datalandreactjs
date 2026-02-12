import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

// export const fetchusers = createAsyncThunk('users/fetchusers',async(obj,thunkAPI)=>{
// 	console.log(obj); // {id: 1}
// 	console.group(thunkAPI)
// 	// console.group(thunkAPI.getState())

//   try{
//     const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
//     // const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${obj.id}`)		
//       .then(response=>response.data)
//     return res;
//   }catch(err){
//     throw new err;
//   }
// })


export const fetchusers = createAsyncThunk('users/fetchusers',async(obj,{rejectWithValue,fulfillWithValue})=>{
	console.log(obj); // {id: 1}
	// console.group(thunkAPI.getState())

	try{
		const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
		// return res.data;

		return fulfillWithValue(res.data);
	}catch(err){
		return rejectWithValue("Something went wrong, try again!");
	}
})


export const usersSlice = createSlice({
  name: 'users',
  initialState: {
		role:"Guest",
		users: [],
    loading: false
  },
  reducers: {
    setrole: (state,action) => {
		  state.role = action.payload || "Guest"
    },
    
    // getusers: (state)=>{
    //   axios.get(`https://jsonplaceholder.typicode.com/users`)
    //   .then(response=>{
    //     console.log(response.data);
    //     state.users = response.data
    //   }).catch(err=>{
    //     console.log(err);
    //   })
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchusers.pending, (state) => {
      
		  console.log('Pending')
      state.loading = true;
    })
	.addCase(fetchusers.fulfilled, (state,action) => {
      
		console.log('Fulfilled');
    state.loading = false;

		console.log(action.payload)
		state.users = action.payload;
    })
	.addCase(fetchusers.rejected, (state) => {
      
		console.log('Rejected');
    })
  },
})
// Action creators are generated for each case reducer function
// export const { setrole,getusers } = usersSlice.actions // before thunk
export const { setrole } = usersSlice.actions // after thunk

export default usersSlice.reducer

// https://jsonplaceholder.typicode.com/
// https://jsonplaceholder.typicode.com/users




// 🔄 Full Flow: How Dispatch Links API Call with extraReducers
// 🟢 When dispatch(fetchUsers()) is called:
// 1️⃣ Redux detects the API call and executes fetchUsers().
// 2️⃣ fetchUsers() calls axios.get() to fetch users.
// 3️⃣ Redux automatically triggers pending in extraReducers.
// 4️⃣ When the API responds:

// If success → fulfilled case updates state with data.
// If error → rejected case updates state with an error.
// 5️⃣ React re-renders the UI with the new state.


// Why is it needed?
// When you dispatch fetchusers(), Redux automatically generates three action types using this string: 1️⃣ users/fetchusers/pending
// → When the API call starts.

// 2️⃣ users/fetchusers/fulfilled
// → When the API call succeeds.

// 3️⃣ users/fetchusers/rejected
// → When the API call fails.

