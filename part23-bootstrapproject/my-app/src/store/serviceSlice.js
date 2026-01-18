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
          image: "https://blog.zegocloud.com/wp-content/uploads/2024/03/types-of-web-development-services.jpg`",
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
          rating: 4.8,
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
          rating: 4.8,
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
          image: "https://www.accesscreative.ac.uk/wp-content/uploads/2024/07/Graphic-design-students-on-work-experience.jpg",
          features: ["Logo Design","Color Theory"],
          rating: 4.8,
          review: 178,
          support: "Unlimited support"
     }
];

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
     name: 'services',
     initialState:{
          datas:[],
          loading:false,
          error: null,
          filters: {
               category: 'all',
               priceRange: {min:0,max:10000},
               rating: 0,
          }
     },
     reducers: {
         setFilter(state,action){
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