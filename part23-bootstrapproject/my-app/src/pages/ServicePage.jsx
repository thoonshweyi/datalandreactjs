import React,{useState,useEffect,useMemo} from "react";
import {useDispatch,useSelector} from "react-redux"
import {Link} from "react-router";

import {fetchServices,fetchBookServices,setFilters,clearFilters,clearError} from "./../store/serviceSlice";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCogs,faFilter,faRocket,faShieldAlt,faHeadset,faMoneyBillWave,faSearch,faCode,faPalette,faChartLine,faCloud,faDiamond,faCalendarCheck,faClock,faUsers,faCheckCircle} from "@fortawesome/free-solid-svg-icons"
import {faSpinner,faExclamation, faStar, faCircleCheck,faMapMarkerAlt ,faBed,faBath,faRulerCombined} from "@fortawesome/free-solid-svg-icons"

import banner4 from "../assets/img/banner/bannerservice.jpg"

const ServicePage = ()=>{
     const {datas,loading,error,bookings,bookingLoading,bookingError,filters} = useSelector((state)=>state.services)
     
     const [query,setQuery] = useState("");
     const [selectedService,setSelectedService] = useState(null);
     const [showBookingModal,setShowBookingModal] =useState(false);
     const [bookingForm,setBookingForm] = useState({
          name: "",
          email: "",
          company: "",
          timeline: "",
          budget: "",
          requirements: ""
     })

     const dispatch = useDispatch();

     useEffect(()=>{
          dispatch(fetchServices());
     },[dispatch]);

     const bookingServiceHandler = (service)=>{
          setSelectedService(service);
          setShowBookingModal(true);
     };

     const bookingSubmitHandler = (e)=>{
          e.preventDefault();

          dispatch(fetchBookServices({
               serviceID: selectedService.id,
               bookingData: bookingForm
          })).then(result=>{
               console.log(result);
               if(result.meta.requestStatus === "fulfilled"){
                    setShowBookingModal(false);
                    setBookingForm({
                         name: "",
                         email: "",
                         company: "",
                         timeline: "",
                         budget: "",
                         requirements: ""
                    });

                    alert("Booking confirmed We will contact you soon.");
               }
               
          })
     }

     // method 1: asic filtering
     // const filteredServices = datas.filter(service=>{
     //      if(filters.category !== 'all' && filters.category !== service.category) return false;
     //      if(service.price < filters.priceRange.min || service.price > filters.priceRange.max) return false;
     //      if(service.rating < filters.rating) return false;
          
     //      if(query && !service.name.toLowerCase().includes(query.toLowerCase())  && !service.description.toLowerCase().includes(query.toLowerCase())) return false;

     //      return true;
     // })

     // method2: useMemo for performance
     const filteredServices = useMemo(()=>{

          const qry = query.trim().toLowerCase();

          const category = filters?.category || 'all';
          const min =  Number.isFinite(filters?.priceRange?.min) ? filters.priceRange.min : 0 ; // safe numbers (avoid NaN), Number.isFinite(value) return true for valid numbers
          const max =  Number.isFinite(filters?.priceRange?.max) ? filters.priceRange.max : 20000;
          const minRating =  Number.isFinite(filters?.rating) ? filters.rating : 0 ;

        
          return datas.filter((data)=>{
               const name = data?.name.toLowerCase();
               const description = data?.description.toLowerCase();

               const matchesCategory = category === 'all' || data.category === category;
               const matchesPrice = (data.price ?? 0) >= min && (data.price ?? 0) <= max;
               const matchesRating = (data.rating ?? 0) >= minRating;
               
               const matchesQuery = !qry || name.includes(qry) || description.includes(qry);

               return matchesQuery && matchesCategory && matchesPrice && matchesRating;
          })

     },[datas,filters,query]);

     const ServiceCard = ({service})=>(
          <div className="col-md-4 col-sm-6 mb-3">
               <div className="card h-100">

                    <div className="position-relative">
                         <img src={service.image} className="card-img-top" style={{height:'150px',objectFit:"cover"}} alt={service.name} />
                         <div className="position-absolute top-0 start-0 m-3">
                              <span className="badge bg-warning text-dark">
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
                              <button type="button" className="btn btn-primary" onClick={()=>bookingServiceHandler(service)}>Book Now</button>
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
                         <select className="form-select" value={filters.category} onChange={(e)=>dispatch(setFilters({category:e.target.value}))}>
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
                                   <input type="number" className="form-control" placeholder="Min"  value={filters.priceRange.min} onChange={(e)=>dispatch(setFilters({
                                        priceRange: {...filters.priceRange,min:parseInt(e.target.value)}
                                   }))}/>
                              </div>
                              <div className="col-6">
                                   <input type="number" className="form-control" placeholder="Max"  value={filters.priceRange.max} onChange={(e)=>dispatch(setFilters({
                                        priceRange: {...filters.priceRange,max:parseInt(e.target.value)}
                                   }))}/>
                              </div>
                         </div>

                    </div>

                    <div className="mb-3">
                         <label className="form-label">Minimum Rating</label>
                         <select className="form-select" value={filters.rating} onChange={(e)=>dispatch(setFilters({rating:parseFloat(e.target.value)}))}>
                              <option value="0">All Rating</option>
                              <option value="4.5">4.5+ Stars</option>
                              <option value="4.9">4.9+ Stars</option>
                              <option value="5">5+ Stars</option>
                         </select>
                    </div>

                    <button className="w-100 btn btn-outline-secondary" onClick={()=>dispatch(clearFilters())}>Clear Filters</button>

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
                                   <form onSubmit={(e)=>e.preventDefault()}>
                                        <div className="input-group input-group-lg">
                                             <input type="text" name="query" className="form-control"   placeholder="Search services...." value={query} onChange={(e)=>setQuery(e.target.value)}/>
                                             <button type="button" className="btn btn-primary"><FontAwesomeIcon icon={faSearch} className="me-2"/> Search</button>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </section>

               <section className="container py-5">

                    <div className="row">
                         {/* sidebar with filters */}
                         <div className="col-md-3">
                              <FilterSidebar />
                         </div>

                         {/* services grid */}
                         <div className="col-md-9">
                              {/* Result Header */}
                              <div className="">
                                   <h3 className="mb-1">Available Services</h3>
                                   <p className="mb-0">{filteredServices.length} services found.</p>
                              </div>

                              {/* Loading State */}
                              {loading && (
                                   <div className="text-center py-5">
                                        <FontAwesomeIcon icon={faSpinner} spin size="3x" className="text-primary mb-3" />
                                        <p>Loading servicves....</p>
                                   </div>
                              )}

                              {/* Error State */}
                              {error && (
                                   <div className="alert alert-danger text-center ">
                                        <FontAwesomeIcon icon={faExclamationTraingle} className="me-2" />
                                        {error}
                                   </div>
                              )}

                              {/* Services Grid */}
                              <div className="row">
                                   {!loading && !error && filteredServices.map(service=>(
                                        <ServiceCard key={service.id} service={service} />
                                   ))}
                              </div>

                              {/* Empty State */}
                              {!loading && !error && filteredServices.length === 0 && (
                                   <div className="text-center py-5">
                                        <FontAwesomeIcon icon={faCogs} size="3x" className="text-white mb-3" />
                                        <h4>No Services Found.</h4>
                                        <p>Try adjusting your filters or search criteria.</p>
                                        <button className="btn btn-primary" onClick={()=>dispatch(clearFilters())}>Clear All Filters</button>
                                   </div>
                              )}
                         </div>
                    </div>

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
               {
                    showBookingModal && selectedService && (
                         <div className="modal show d-block">
                              <div className="modal-dialog modal-lg">
                                   <div className="modal-content">
                                        <div className="modal-header">
                                             <h6 className="modal-title">Book Service: {selectedService.name}</h6>
                                             <button type="button" className="btn-close" onClick={()=>setShowBookingModal(false)}></button>
                                        </div>
                                        <div className="modal-body">
                                             <form onSubmit={bookingSubmitHandler}>
                                                  <div className="row g-3">
                                                       <div className="col-md-6">
                                                            <label className="form-label">Full Name *</label>
                                                            <input type="text" className="form-control" value={bookingForm.name} onChange={(e)=>setBookingForm({...bookingForm,name:e.target.value})} required />
                                                       </div>
                                                       <div className="col-md-6">
                                                            <label className="form-label">Email *</label>
                                                            <input type="email" className="form-control" required onChange={(e)=>setBookingForm({...bookingForm,email:e.target.value})}/>
                                                       </div>
                                                       <div className="col-md-6">
                                                            <label className="form-label">Company</label>
                                                            <input type="text" className="form-control" required onChange={(e)=>setBookingForm({...bookingForm,company:e.target.value})} />
                                                       </div>
                                                       <div className="col-md-6">
                                                            <label className="form-label">Timeline</label>
                                                            <select className="form-select" onChange={(e)=>setBookingForm({...bookingForm,timeline:e.target.value})}>
                                                                 <option value="">Select timeline</option>
                                                                 <option value="urgent">Urgent (1-2 weeks)</option>
                                                                 <option value="standard">Standard (3-4 weeks)</option>
                                                                 <option value="flexible">Flexible (1-2 months)</option>
                                                            </select>
                                                       </div>
                                                       <div className="col-md-12">
                                                            <label className="form-label">Budget Range</label>
                                                            <select className="form-select" onChange={(e)=>setBookingForm({...bookingForm,budget:e.target.value})}>
                                                                 <option value="">Select bugdet</option>
                                                                 <option value="1000-5000">$1,000 - $5,000</option>
                                                                 <option value="5000-10000">$5,000 - $10,000</option>
                                                                 <option value="10000-25000">$10,000 - $25,000</option>
                                                                 <option value="25000+">$25,000+</option>
                                                            </select>
                                                       </div>
                                                       <div className="col-md-12">
                                                            <label className="form-label">Project Requirements</label>
                                                            <textarea className="form-control" row="4" placeholder="Descrie your project requirements in detail...." onChange={(e)=>setBookingForm({...bookingForm,requirements:e.target.value})}></textarea>
                                                       </div>

                                                       <div className="mt-4">
                                                            <h6>Service Summary:</h6>
                                                            <div className="card bg-light">
                                                                 <div className="card-body">
                                                                      <div className="row">
                                                                           <div className="col-6">
                                                                                <strong>Service: </strong> {selectedService.name}
                                                                           </div>
                                                                           <div className="col-6">
                                                                                <strong>Duration: </strong> {selectedService.duration}
                                                                           </div>
                                                                           <div className="col-6">
                                                                                <strong>Support: </strong> {selectedService.support}
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="modal-footer mt-3">
                                                       <button type="button" className="btn btn-secondary"  onClick={()=>setShowBookingModal(false)}>Cancel</button>
                                                       <button type="submit" className="btn btn-primary ms-2" disable={bookingLoading}>
                                                       {
                                                       bookingLoading ? (
                                                            <>
                                                            <FontAwesomeIcon icon={faSpinner} spin className="me-2"  />
                                                            Processing....
                                                            </>
                                                       ) : (
                                                            <>
                                                                 <FontAwesomeIcon icon={faCalendarCheck} className="me-2"  />
                                                                 Confirm Booking
                                                            </>
                                                       )
                                                       }
                                                       </button>
                                                  </div>
                                             </form>
                                        </div>

                                   
                                   </div>
                              </div>
                         </div>
                    )
               }

          </main>
     )
};
export default ServicePage;
