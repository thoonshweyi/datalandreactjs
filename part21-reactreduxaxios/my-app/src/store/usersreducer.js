import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// const BASEURL = `https://jsonplaceholder.typicode.com/users`;
const BASEURL = `http://localhost:5000/api/users`;


// Thunk to fetch users
export const fetchusers = createAsyncThunk('data/fetchusers',async(obj,{rejectWithValue})=>{
     try{
          const res = await axios.get(BASEURL);
          return res.data;
     }catch(err){
          return rejectWithValue('Something went wrong in fetchuser',err);
     }
})


export const adduser = createAsyncThunk('data/adduser',async(obj,{rejectWithValue})=>{
     try{
          const res = await axios.post(BASEURL,obj);
          console.log(obj);
          console.log(res);
          return res.data;
     }catch(err){
          return rejectWithValue('Something went wrong in add user',err);
     }
})

export const edituser = createAsyncThunk('data/edituser',async(obj,{rejectWithValue})=>{
     try{
          const res = await axios.put(`${BASEURL}/${obj.id}`,obj);
          return res.data;
     }catch(err){
          return rejectWithValue('Something went wrong in edit user',err);
     }
})

export const deleteuser = createAsyncThunk('data/deleteuser',async(id,{rejectWithValue})=>{
     try{
          const res = await axios.delete(`${BASEURL}/${id}`);
          return res.data;
     }catch(err){
          return rejectWithValue('Something went wrong in delete user',err);
     }
})

export const userSlice = createSlice({
     name: "users",
     initialState: {
          users: [],
          loading: false,
          error: null
     },

     reducers: {

     },
     extraReducers: (builder)=>{
          builder 
               .addCase(fetchusers.pending,(state)=>{
                    state.loading = true;
                    state.error = null;
               })
               .addCase(fetchusers.fulfilled,(state,action)=>{
                    state.loading = false;
                    state.error = null;

                    state.users = action.payload;
               })
               .addCase(fetchusers.rejected,(state,action)=>{
                    state.loading = false;
                    state.error = action.payload;
               })
               .addCase(adduser.fulfilled,(state,action)=>{
                    state.users.push(action.payload);
               })
               .addCase(edituser.fulfilled,(state,action)=>{
                    state.loading = false;
                    state.error = action.payload;
               })
               .addCase(deleteuser.fulfilled,(state,action)=>{
                    state.users = state.users.filter(user=>user.id != action.payload)
               })
               
     }
})

export default userSlice.reducer;
// 5DE