import React,{useState,useEffect,useMemo} from "react";
import {useDispatch,useSelector} from "react-redux"
import {Link} from "react-router";

import {fetchProperties,setFilter,clearFilters} from "./../store/serviceSlice";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCogs,faFilter,faRocket,faShieldAlt,faHeadset,faMoneyBillWave,faSearch,faCode,faPalette,faChartLine,faCloud,faDiamond,faCalendarCheck,faClock,faUsers,faCheckCircle} from "@fortawesome/free-solid-svg-icons"
import {faSpinner,faExclamation, faStar, faCircleCheck,faMapMarkerAlt ,faBed,faBath,faRulerCombined} from "@fortawesome/free-solid-svg-icons"

import banner4 from "../assets/img/banner/banner4.jpg"

const ServicePage = ()=>{
     const {loading,error,datas,filters} = useSelector((state)=>state.properties)
     
     const [query,setQuery] = useState("");
     const [page,setPage] = useState(1);
     
     const dispatch = useDispatch();

     useEffect(()=>{
          dispatch(fetchProperties({limit:60}));
     },[dispatch]);

     const modalHandler = ()=>{

     };

     const bookingSubmitHandler = (e)=>{
          e.preventDefault();
     }

     const filtered = useMemo(()=>{

          const getqtext = filters.query.trim().toLowerCase();
          const getmin = filters.minprice ? parseFloat(filters.minprice) : null ;    // **
          const getmax = filters.maxprice ? parseFloat(filters.maxprice) : null ;    // **

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

     const ServiceCard = ({service})=>(
          <div className="col-md-4 col-sm-6 mb-3">
               <div className="card h-100">

                    <div className="position-relative">
                         <img src={service.image} className="card-img-top" style={{height:'150px',objectFit:"cover"}} alt={service.name} />
                         <div className="position-absolute top-0 start-0 m-3">
                              <span className="rating bg-warning text-dark">
                                   <FontAwesomeIcon icon={faStar} className="me-1" />
                                   {service.rating}
                              </span>
                         </div>
                         <div className="position-absolute top-0 end-0 m-3">
                              <span className="badge bg-primary">{service.category}</span>
                         </div>
                    </div>
                    <div className="card-body">
                         <h6 className="card-title text-dark mb-0">{service.name}</h6>
                         <p className="card-text text-muted">{service.description}</p>
                         <div class="">
                              <div className="d-flex flex-wrap gap-1 mb-2">
                                   <span className="badge bg-light text-dark small"></span>
                              </div>
                         </div>
                             
                         <div className="mb-3">
                              <div className="row text-center small text-muted">
                                   <div className="col-4">
                                        <FontAwesomeIcon icon={faClock} className="d-block mb-1" />
                                        {service.duration}
                                   </div>
                                   <div className="col-4">
                                        <FontAwesomeIcon icon={faUsers} className="d-block mb-1" />
                                        {service.review}
                                   </div>
                                   <div className="col-4">
                                        <FontAwesomeIcon icon={faCheckCircle} className="d-block mb-1" />
                                        {service.support}
                                   </div>
                              </div>
                         </div>

                         <div className="d-flex justify-content-between align-items-center">
                              <h4 className="text-primary mb-0">${service.price.toLocaleString()}</h4>
                              <button type="button" className="btn btn-primary" onClick={()=>modalHandler()}>Book Now</button>
                         </div>


                    </div>
               </div>
          </div>
     )

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
     );

     const ServiceCategories = ()=>(
          <div className="row text-center text-dark mb-3">
               <div className="col-md-2 col-4 mb-3">
                    <FontAwesomeIcon icon={faCode} size="2x" className="text-primary mb-2" />
                    <h6>Development</h6>
               </div>
               <div className="col-md-2 col-4 mb-3">
                    <FontAwesomeIcon icon={faPalette} size="2x" className="text-primary mb-2" />
                    <h6>Design</h6>
               </div>
               <div className="col-md-2 col-4 mb-3">
                    <FontAwesomeIcon icon={faChartLine} size="2x" className="text-primary mb-2" />
                    <h6>Marketing</h6>
               </div>
               <div className="col-md-2 col-4 mb-3">
                    <FontAwesomeIcon icon={faCloud} size="2x" className="text-primary mb-2" />
                    <h6>Cloud</h6>
               </div>
               <div className="col-md-2 col-4 mb-3">
                    <FontAwesomeIcon icon={faDiamond} size="2x" className="text-primary mb-2" />
                    <h6>Branding</h6>
               </div>
               <div className="col-md-2 col-4 mb-3">
                    <FontAwesomeIcon icon={faRocket} size="2x" className="text-primary mb-2" />
                    <h6>Consulting</h6>
               </div>
          </div>
     );

     


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
                                             {/* <ServiceCard service={service}/> */}
                                        </div>
                                   </div>
                              </div>
                             

                         </>
                    )}

                

               </section>
          
               {/* Why Choose Us */}
               <section className="bg-primary text-white py-5">
                    <div className="container">
                         <div className="text-center mb-5">
                              <h4 className="mb-3">Why Choose Our Sevices?</h4>
                         </div>

                         <div className="row text-center">
                              <div className="col-md-3">
                                   <FontAwesomeIcon icon={faRocket} size="3x" className="mb-3" />
                                   <h5>Fast Delivery</h5>
                                   <p>Real Feedback from real people. We're proud to earn their trust.</p>
                              </div>
                              <div className="col-md-3">
                                   <FontAwesomeIcon icon={faShieldAlt} size="3x" className="mb-3" />
                                   <h5>Quality Grarantee</h5>
                                   <p>Real Feedback from real people. We're proud to earn their trust.</p>
                              </div>
                                <div className="col-md-3">
                                   <FontAwesomeIcon icon={faHeadset} size="3x" className="mb-3" />
                                   <h5>24/7 Support</h5>
                                   <p>Real Feedback from real people. We're proud to earn their trust.</p>
                              </div>
                                <div className="col-md-3">
                                   <FontAwesomeIcon icon={faMoneyBillWave} size="3x" className="mb-3" />
                                   <h5>Competitive Pricing</h5>
                                   <p>Real Feedback from real people. We're proud to earn their trust.</p>
                              </div>
                         </div>
                    </div>
               </section>

                {/* Service Categories */}
               <section className="bg-light py-5">
                    <div className="container">
                         <div className="text-center mb-5">
                              <h4 className="text-dark mb-3">Service Categories</h4>
                              <p className="text-muted">Real Feedback from real people. We're proud to earn their trust.</p>
                         </div>

                         <ServiceCategories />
                    </div>
               </section>

               {/* Booking Modal */}
               <div className="modal">
                    <div className="modal-dialog modal-lg">
                         <div className="modal-content">
                              <div className="modal-header">
                                   <h6 className="modal-title">Book Service:</h6>
                                   <button type="button" className="btn-close"></button>
                              </div>
                              <div className="modal-body">
                                   <form>
                                        <div className="row g-3">
                                             <div className="col-md-6">
                                                  <label className="form-label">Full Name *</label>
                                                  <input type="text" className="form-control" required />
                                             </div>
                                             <div className="col-md-6">
                                                  <label className="form-label">Email *</label>
                                                  <input type="email" className="form-control" required />
                                             </div>
                                             <div className="col-md-6">
                                                  <label className="form-label">Company</label>
                                                  <input type="text" className="form-control" required />
                                             </div>
                                             <div className="col-md-6">
                                                  <label className="form-label">Timeline</label>
                                                  <select className="form-select">
                                                       <option value="">Select timeline</option>
                                                       <option value="urgent">Urgent (1-2 weeks)</option>
                                                       <option value="standard">Standard (3-4 weeks)</option>
                                                       <option value="flexible">Flexible (1-2 months)</option>
                                                  </select>
                                             </div>
                                             <div className="col-md-12">
                                                  <label className="form-label">Budget Range</label>
                                                  <select className="form-select">
                                                       <option value="">Select bugdet</option>
                                                       <option value="1000-5000">$1,000 - $5,000</option>
                                                       <option value="5000-10000">$5,000 - $10,000</option>
                                                       <option value="10000-25000">$10,000 - $25,000</option>
                                                       <option value="25000+">$25,000+</option>
                                                  </select>
                                             </div>
                                             <div className="col-md-12">
                                                  <label className="form-label">Project Requirements</label>
                                                  <textarea className="form-control" row="4" placeholder="Descrie your project requirements in detail...."/>
                                             </div>
                                        </div>
                                        <div className="modal-footer mt-3">
                                             <button type="button" className="btn btn-secondary">Cancel</button>
                                             <button type="submit" className="btn btn-primary ms-2"><FontAwesomeIcon icon={faCalendarCheck} className="me-2"/>Confirm Booking</button>
                                        </div>
                                   </form>
                              </div>

                             
                         </div>
                    </div>
               </div>
          </main>
     )
};
export default ServicePage;
