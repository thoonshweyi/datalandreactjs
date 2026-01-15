import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const API_URL =  `https://dummyjson.com/products?limit=`;

export const fetchProperties = createAsyncThunk( "property/fetchProperty", async({limit=24}={})=>{
     const {data} = await axios.get(`${API_URL}${limit}`);
     console.log(data);
     // console.log(data.users);

     const cities = ["Yangon","Mandalay","PyinOoLwin","Taunggyi","Bago","Mawlamyine"];
     const statuses = ["For Sale","For Rent","Sold Out"];
     const betsList = [1,2,3,4,5];
     const bathsList = [1,2,3];

     const props = data.products.map((product,idx)=>({
          id: product.id,
          title: product.title,
          description: product.description,
          price: product.price,
          thumbnail: product.thumbnail || product.images?.[0],
          rating: product.rating,
           

          city: cities[ idx % cities.length], // remainder 0%6 = 0, 1 % 6 = 1 2 3 4 5 0
          status: statuses[ idx % statuses.length], // 0%3=0,1,2,0,1,2,....
          beds: betsList[ idx % betsList.length], // 0%5 = 0,1,2,3,4,0,....
          baths: bathsList[ idx % bathsList.length],  //  0%3 = 0,1,2,0,1,....
          area: 600 + (idx % 10) * 100 // sqft 600 + 0, 600 + 1000 = 1600

     }));

     console.log(props);


     return props;
});

const serviceSlice = createSlice({
     name: 'properties',
     initialState:{
          datas:[],
          loading:false,
          error: null,
          filters: {
               query: "",
               city: "all",
               status: "all",
               minprice: "",
               maxprice: ""
          }
     },
     reducers: {
         setFilter(state,action){
               state.filters = {...state.filters,...action.payload};
         },
         clearFilters(state){
               state.filters = {
                    query: "",
                    city: "all",
                    status: "all",
                    minprice: "",
                    maxprice: ""
               }
         }
     },
     extraReducers: (builder)=>{
          builder
               .addCase(fetchProperties.pending,(state)=>{
                    state.loading =true;
                    state.error = null;
               })
               .addCase(fetchProperties.fulfilled,(state,action)=>{
                    state.loading = false;
                    state.datas = action.payload;
                    // console.log(action.payload)
               })
               .addCase(fetchProperties.rejected,(state,action)=>{
                    state.loading = false;
                    state.error = action.error.message || "Failed to load properties";
               })
     }
});

export const {setFilter,clearFilters} = serviceSlice.actions;
export default serviceSlice.reducer;

// 