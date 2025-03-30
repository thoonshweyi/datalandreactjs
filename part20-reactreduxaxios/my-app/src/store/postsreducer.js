import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const fetchposts = createAsyncThunk(
  'data/fetchposts',async(obj,{rejectWithValue})=>{
	console.log(obj); // {id: 1}
	// console.group(thunkAPI.getState())

	try{
		const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
		return res.data;
	}catch(err){
		return rejectWithValue("Something went wrong, try again!");
	}
})


export const fetchcomments = createAsyncThunk(
  'data/fetchcomments',async(_,{rejectWithValue})=>{

	try{
		const res = await axios.get(`https://jsonplaceholder.typicode.com/comments`)
		return res.data;
	}catch(error){
		return rejectWithValue("Failed to fetch comments, try again!",error);
	}
})
export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
		posts: [],
    comments: [],
    favorites: [],
    loading: false,
    error:null
  },
  reducers: {
    togglefavorite: (state,action) => {
      // console.log(action);
      // console.log(action.payload);
      // console.log(state.favorites);
      const postid = action.payload;
      if(state.favorites.includes(postid)){
        state.favorites = state.favorites.filter(id => id !== postid);
      }else{
        state.favorites.push(postid);
      }
    },
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchposts.pending, (state) => {
      
		  console.log('Pending')
      state.loading = true;
      state.error = null;
    })
	.addCase(fetchposts.fulfilled, (state,action) => {
      
		console.log('Fulfilled');
    state.loading = false;
    state.error = null;

		// console.log(action.payload)
		state.posts = action.payload;
    })
	.addCase(fetchposts.rejected, (state,action) => {
      
		console.log('Rejected');
    state.loading = false;
		state.error = action.payload;

    })
    .addCase(fetchcomments.pending, (state) => {
      
		  console.log('Pending')
      state.loading = true;
      state.error = null;
    })
	.addCase(fetchcomments.fulfilled, (state,action) => {
      
		console.log('Fulfilled');
    state.loading = false;
    state.error = null;

		// console.log(action.payload)
		state.comments = action.payload;
    })
	.addCase(fetchcomments.rejected, (state,action) => {
      
		console.log('Rejected');
    state.loading = false;
		state.error = action.payload;

    })
  },
})
export const { togglefavorite } = postsSlice.actions // after thunk

export default postsSlice.reducer
