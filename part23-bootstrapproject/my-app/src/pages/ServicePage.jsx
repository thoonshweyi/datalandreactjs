import React,{useState,useEffect,useMemo} from "react";
import {useDispatch,useSelector} from "react-redux"
import {Link} from "react-router";

import {fetchProperties,setFilter,clearFilters} from "./../store/serviceSlice";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCogs,faFilter,faSearch} from "@fortawesome/free-solid-svg-icons"
import {faSpinner,faExclamation, faStar, faCircleCheck,faMapMarkerAlt ,faBed,faBath,faRulerCombined} from "@fortawesome/free-solid-svg-icons"

import banner4 from "../assets/img/banner/banner4.jpg"

const PAGESIZE = 8;

const ServicePage = ()=>{
     const {loading,error,datas,filters} = useSelector((state)=>state.properties)
     
     const [query,setQuery] = useState("");
     const [page,setPage] = useState(1);
     
     const dispatch = useDispatch();

     useEffect(()=>{
          dispatch(fetchProperties({limit:60}));
     },[dispatch]);

     const FilterSidebar = ()=>(
          <div className="card mb-4">
               <div className="card-header bg-primary text-white">
                    <FontAwesomeIcon icon={faFilter} className="me-3" />Filter Services
               </div>
                <div className="card-body">
                    <div className="mb-3">
                         <label className="form-label">Category</label>
                         <select className="form-select">
                              <option value="all">All Categories</option>
                              <option value="technology">Technology</option>
                              <option value="design">Design</option>
                              <option value="marketing">Marketing</option>
                         </select>
                    </div>

                    <div className="mb-3">
                         <label className="form-label">Price Range</label>

                         <div className="row">
                              <div className="col-6">
                                   <input type="number" className="form-control" placeholder="Min" />
                              </div>
                              <div className="col-6">
                                   <input type="number" className="form-control" placeholder="Max" />
                              </div>
                         </div>

                    </div>

                    <div className="mb-3">
                         <label className="form-label">Minimum Rating</label>
                         <select className="form-select">
                              <option value="all">All Rating</option>
                              <option value="technology">4.5+ Stars</option>
                              <option value="design">4.0+ Stars</option>
                              <option value="marketing">3.5+ Stars</option>
                         </select>
                    </div>

                    <button className="w-100 btn btn-outline-secondary">Clear Filters</button>

               </div>
          </div>
     )

     // method 1
     // const cities = ["all","Yangon","Mandalay","PyinOoLwin","Taunggyi","Bago","Mawlamyine"];
     // const statuses = ["all","For Sale","For Rent","Sold Out"];

     // method 2
     const cities = ["all",...Array.from(new Set(datas.map(data=>data.city)))];
     const statuses = ["all",...Array.from(new Set(datas.map(data=>data.status)))];


     const formatUSD = (price)=>
          new Intl.NumberFormat("en-US",{
               style: "currency",
               currency: "USD" // USD usd MMK mmk THB thb     
     }).format(price || 0);

     // method 2 (for speedup ui = useMemo())

     const filtered = useMemo(()=>{

          const getqtext = filters.query.trim().toLowerCase();
          const getmin = filters.minprice ? parseFloat(filters.minprice) : null ;    // **
          const getmax = filters.maxprice ? parseFloat(filters.maxprice) : null ;    // **

          // console.log(!getqtext); // true
          // console.log(getqtext);

          // const numbers = [1,2,2,3,3,3,4];
          // const uniquenums = new Set(numbers);
          // console.log(uniquenums); // Set(4) {1, 2, 3, 4}
          // console.log(...uniquenums); // 1 2 3 4
          // console.log([...uniquenums]); // (4) [1, 2, 3, 4]

          // const uniquenums = new Set(numbers).size;
          // console.log(uniquenums); // 4

          return datas.filter((data)=>{
               const matchQuery = !getqtext || data.title.toLowerCase().includes(getqtext) || data.city.toLowerCase().includes(getqtext) || data.description.toLowerCase().includes(getqtext);
               const matchCity = filters.city == "all" || data.city === filters.city;
               const matchStatus = filters.status == "all" || data.status === filters.status;
               const matchMin = getmin == null || data.price >= getmin;
               const matchMax = getmax == null || data.price <= getmax;

               
               return matchQuery && matchCity && matchStatus && matchMin && matchMax
          })

     },[datas,filters]);

     const onChangeHandler = (e)=>{
          dispatch(setFilter({
               [e.target.name]: e.target.value
          }))
     }




     const totalPages = Math.max(1,Math.ceil(filtered.length / PAGESIZE)); // atleast 1 page
     const pageItems = filtered.slice((page - 1) * PAGESIZE, page * PAGESIZE);

     // [a,b,c,d,e,f,g,h,i,j,k,l] // page 1
     // 0 1 2 3 4 5 6 7 8 9 10 11

     // page 1 = 0 to 5  a to f
     // page 2 = 6 to 11 g to l

     // slice(0,6) = 0,1,2,3,4,5
     // slice(6,12) = 6,7,8,9,10,11

     // 1-1 * 6     , 1 * 6
     // 0           , 6

     // 2-1 * 6     , 2 * 6
     // 6           , 12

     useEffect(()=>{
          // const result = Array(5);
          // console.log(result); // (5) [empty × 5]
          // console.log(result.length); // 5

          // currentPage number on filter results which doesn't exist and empty
          // if filtering changes and current page is out of range! reset to 1
          if(page > totalPages) setPage(1);
     },[page,totalPages]);


     return (
          <main className="bg-dark text-light">
               {/* Banner */}
               <section className="text-center d-flex justifiy-content-center align-items-center" style={{
                    minHeight: "70vh",
                    backgroundImage: `url(${banner4})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
               }}>
                    <div className="container bg-dark bg-opacity-50 rounded py-5">
                         <h1 className="display-6"><FontAwesomeIcon icon={faCogs} />Our Professional Services</h1>
                         <p className="lead">Real Feedback from real people. We're proud to earn their trust.</p>

                         
                         {/* search box */}
                         <div className="row justify-content-center mt-4">
                              <div className="col-md-8">
                                   <form >
                                        <div className="input-group input-group-lg">
                                             <input type="text" name="query" className="form-control"   placeholder="Search services...." value={filters.query} onChange={onChangeHandler}/>
                                             <button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faSearch} className="me-2"/> Search</button>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </section>

               <section className="container py-5">

                    {/* loading */}
                    {loading && (
                         <div className="text-center">
                              <FontAwesomeIcon icon={faSpinner} spin className="text-warning"/>
                              <p className="mt-2">Loading customers....</p>
                         </div>
                    )}

                    {/* error */}
                    {error && (
                         <div className="alert alert-danger text-center">
                              <FontAwesomeIcon icon={faExclamation} className="text-danger me-2"/>
                              {error}
                         </div>
                    )}

                    {!loading && !error && (
                         <>
                              <div className="row">
                                   {/* sidebar with filters */}
                                   <div className="col-md-3">
                                        <FilterSidebar />
                                   </div>

                                   {/* services grid */}
                                   <div className="col-md-9">
                                                  
                                        {/*  cards */}
                                        <div className="row g-4">

                                             {
                                                  pageItems.map((pageItem)=>(
                                                       <div className="col-md-3 col-sm-6" key={pageItem.id}>
                                                            <div className="card h-100 border-0">

                                                                 <div className="position-relative">
                                                                      <img src={pageItem.thumbnail} className="card-img-top" style={{height:150,objectFit:"cover"}} alt={pageItem.name} />
                                                                      <span className={`badge ${
                                                                           pageItem.status === "Sold Out" ? "bg-danger" : pageItem.status == "For Rent" ? "bg-info" : "bg-success"
                                                                      } position-absolute top-0 start-0 m-2`}>{pageItem.status}</span>
                                                                      <span className="badge bg-dark position-absolute bottom-0 end-0 m-2">{formatUSD(pageItem.price)}</span>
                                                                 </div>
                                                                 <div className="card-body">
                                                                      <h6 className="text-dark mb-0">{pageItem.title}</h6>
                                                                           <div>
                                                                                <small className="text-muted mb-2">
                                                                                     <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1"/>
                                                                                     {pageItem.city}
                                                                                </small>
                                                                           </div>

                                                                           <div className="d-flex gap-3 small text-muted">
                                                                                <span><FontAwesomeIcon  icon={faBed} className="me-1"/>{pageItem.beds} bd</span>
                                                                                <span><FontAwesomeIcon  icon={faBath} className="me-1"/>{pageItem.baths} ba</span>
                                                                                <span><FontAwesomeIcon  icon={faRulerCombined} className="me-1"/>{pageItem.area} sqft</span>
                                                                           </div>


                                                                 </div>
                                                            </div>
                                                       </div>
                                                  ))
                                             }

                                             {!pageItems.length && (
                                                  <div className="text-center py-5">No properties found.</div>
                                             )}
                                             
                                        </div>
                                   </div>
                              </div>
                             

                         </>
                    )}

                

               </section>
          </main>
     )
};
export default ServicePage;
