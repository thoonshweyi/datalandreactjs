import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// Mock API Service
const mockdatas = [
     {
          id:1,
          name: "Web Development",
          category: "technology",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          price: 5000,
          duration: "4-6 weeks",
          // image: "https://blog.zegocloud.com/wp-content/uploads/2024/03/types-of-web-development-services.jpg`",
          image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvR-_E8NnfyIBV7oZp-DjXRb7lbDzQ3u3eWw&s`,
          features: ["Responsive Design","SEO Optimized","Fast Loading","Cross-browser Compatible"],
          rating: 4.8,
          review: 124,
          support: "6 months free support"
     },
     {
          id:2,
          name: "Mobile App Development",
          category: "technology",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          price: 8000,
          duration: "6-8 weeks",
          image: "https://www.webtekdigital.com/wp-content/uploads/2024/10/1711974550479.jpeg",
          features: ["Native Performance","Offline Capability","Push Notifications"],
          rating: 4.9,
          review: 89,
          support: "10 months free support"
     },
     {
          id:3,
          name: "UI/UX Design",
          category: "design",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          price: 3000,
          duration: "2-3 weeks",
          image: "https://admin.wac.co/uploads/Blog%20Media/ux_ui-01-3_5915c7e99f7fc2e0.jpg",
          features: ["User Research","Wireframing","Prototyping"],
          rating: 4.7,
          review: 156,
          support: "3 months free support"
     },
     {
          id:4,
          name: "Digital Marketing",
          category: "marketing",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          price: 2000,
          duration: "Ongoing",
          image: "https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2022/02/digital-marketing-2.jpg.optimal.jpg",
          features: ["SEO Optimization","Social Media Management","Content Strategy"],
          rating: 4.6,
          review: 203,
          support: "Ongoing support"
     },
     {
          id:5,
          name: "Cloud Solutions",
          category: "technology",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          price: 6000,
          duration: "3-4 weeks",
          image: "https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2021/08/12060931/Untitled-design-88.png",
          features: ["Cloud Migration","DevOps Implementation","24/7 monitoring"],
          rating: 4.8,
          review: 67,
          support: "24/7 monitoring"
     },
     {
          id:6,
          name: "Graphic Design",
          category: "Design",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          price: 2500,
          duration: "3-4 weeks",
          // image: "https://www.accesscreative.ac.uk/wp-content/uploads/2024/07/Graphic-design-students-on-work-experience.jpg",
          image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSymqb5gXo-xcYRRhl-sjMXiXx3Xd_CqbhNwLLMFljO8usafb91",
          features: ["Logo Design","Color Theory"],
          rating: 4.9,
          review: 178,
          support: "Unlimited support"
     }
];

const servicesAPI = {
     fetchServices : async()=>{
          return mockdatas;
     },
     bookService: async(serviceID,bookingData)=>{
          const data = {
               id: Date.now(),
               serviceID,
               ...bookingData,
               status: "confirmed",
               bookingDate: new Date().toISOString()
          };
          console.log(`Service ${serviceID} booked with data: ${data}`);

          return data;

     }
}

// const API_URL =  `https://dummyjson.com/products?limit=`;

export const fetchServices = createAsyncThunk( "services/fetchServices", async(_,{rejectWithValue})=>{
   try{
     const data = await servicesAPI.fetchServices();
     return data;
   }catch(error){
     return rejectWithValue(error.message);
   }
});

export const fetchBookServices = createAsyncThunk( "services/fetchBookServices", async({serviceID,bookingDate},{rejectWithValue})=>{
   try{
     const data = await servicesAPI.bookService(serviceID,bookingDate);
     return data;
   }catch(error){
     return rejectWithValue(error.message);
   }
});

const serviceSlice = createSlice({
     name: 'services',
     initialState:{
          datas:[],
          bookings: [],
          loading:false,
          error: null,
          bookingLoading: false,
          bookingError: null,
          filters: {
               category: 'all',
               priceRange: {min:0,max:10000},
               rating: 0,
          }
     },
     reducers: {
          clearError:(state)=>{
               state.error = null,
               state.bookingError = null
          },
         setFilters(state,action){
               state.filters = {...state.filters,...action.payload};
         },
         clearFilters(state){
               state.filters = {
                    category: 'all',
                    priceRange: {min:0,max:10000},
                    rating: 0,
               }
         }
     },
     extraReducers: (builder)=>{
          builder
               // Fetch Services
               .addCase(fetchServices.pending,(state)=>{
                    state.loading =true;
                    state.error = null;
               })
               .addCase(fetchServices.fulfilled,(state,action)=>{
                    state.loading = false;
                    state.datas = action.payload;
                    // console.log(action.payload)
               })
               .addCase(fetchServices.rejected,(state,action)=>{
                    state.loading = false;
                    state.error = action.error.message || "Failed to load services";
               })
               // Fetch Book Services
               .addCase(fetchBookServices.pending,(state)=>{
                    state.bookingLoading =true;
                    state.bookingError = null;
               })
               .addCase(fetchBookServices.fulfilled,(state,action)=>{
                    state.bookingLoading = false;
                    state.bookings.push(action.payload);
                    // console.log(action.payload)
               })
               .addCase(fetchBookServices.rejected,(state,action)=>{
                    state.bookingLoading = false;
                    state.bookingError = action.error.message || "Failed to load booking services";
               })
     }
});

export const {clearError,setFilters,clearFilters} = serviceSlice.actions;
export default serviceSlice.reducer;

// 