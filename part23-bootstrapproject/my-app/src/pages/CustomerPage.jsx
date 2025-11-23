import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux"
import {Link} from "react-router";

import {fetchCustomers,toggleFavorite} from "./../store/customerSlice";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSpinner,faExclamation,faTag,faSearch,faTimes, faStar, faCircleCheck,faHeart} from "@fortawesome/free-solid-svg-icons"

import banner4 from "../assets/img/banner/banner4.jpg"

const PAGESIZE = 6;

const CustomerPage = ()=>{
     const {loading,error,datas} = useSelector((state)=>state.customers)
     
     const [searchItem,setSearchItem] = useState("");
     const [filterDatas,setFilterDatas] = useState([]);
     
     const dispatch = useDispatch();

     useEffect(()=>{
          dispatch(fetchCustomers({limit:30}));
     },[dispatch]);

     useEffect(()=>{

          // console.log(datas);

          if(datas && datas.length > 0){
               const filtered = datas.filter(data=>
                    data.title.toLowerCase().includes(searchItem.toLowerCase()) ||
                    data.description.toLowerCase().includes(searchItem.toLowerCase()) ||
                    data.category.toLowerCase().includes(searchItem.toLowerCase())
               )

               setFilterDatas(filtered);
          }
     },[searchItem,datas]);

     const searchHandler = (e)=>{
          setSearchItem(e.target.value);
     }
     const clearHandler = ()=>{
          setSearchItem("");
     }

     const displaydatas = searchItem ? filterDatas : datas;

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
                         <h1 className="display-6">Our Customers</h1>
                         <p className="lead">Real Feedback from real people. We're proud to earn their trust.</p>

                         
                         {/* search box */}
                         <div className="mx-auto mt-3" style={{maxWidth:560}}>
                              <input type="text" className="form-control form-control-lg"   placeholder="Search customers by name,description or category...." value={searchItem} onChange={searchHandler}  />
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
                              {/* status cards */}
                              <div className="row g-3 mb-3">
                                   <div className="col-md-4">
                                        <div className="h-100 bg-secondary text-center p-3">
                                             <h6 className="opacitiy-5 mb-1">Total Customers</h6>
                                             <div className="display-6 fw-bold">50</div>
                                        </div>
                                   </div>

                                   <div className="col-md-4">
                                        <div className="h-100 bg-secondary text-center p-3">
                                             <h6 className="opacitiy-75 mb-1">Avg. Rating</h6>
                                             <div className="display-6 fw-bold">5.0 <FontAwesomeIcon icon={faStar} className="text-warning ms-1" /></div>
                                        </div>
                                   </div>

                                   <div className="col-md-4">
                                        <div className="h-100 bg-secondary text-center p-3">
                                             <h6 className="opacitiy-75 mb-1">Vreified</h6>
                                             <div className="display-6 fw-bold"><FontAwesomeIcon icon={faCircleCheck} className="text-info me-1" /> 43+</div>
                                        </div>
                                   </div>
                              </div>


                              {/*  cards */}
                              <div className="row g-4">
                                   <div className="col-md-4 col-sm-6">
                                        <div className="card h-100 border-0">
                                             <div className="card-body">
                                                  <div className="d-flex align-items-center">
                                                       <img src="" className="rounded-circle border me-3" width="55" height="55" style={{objectFit:"cover"}} alt="" />
                                                       <div>
                                                            <h6 className="text-dark mb-0">Hsu Hsu</h6>
                                                            <small className="text-muted">
                                                                 manager @ abc.co.,ltd
                                                            </small>
                                                            <div className="small text-muted">Mandalay</div>
                                                       </div>
                                                       <button className="btn btn-sm btn-outline-danger ms-auto" title="Unfavourite"><FontAwesomeIcon icon={faHeart} /></button>
                                                  </div>

                                                  <p className="text-muted mt-3 mb-2" style={{minHeight:60}}>
                                                       Real Feedback from real people. We're proud to earn their trust.
                                                  </p>

                                                  <div className="mt-auto">
                                                       <FontAwesomeIcon icon={faStar} />
                                                  </div>
                                             </div>
                                        </div>
                                   </div>


                                   <div className="text-center py-5">No customers found.</div>
                              </div>

                              {/* pagination */}
                              <nav className="mt-4">
                                   <ul className="pagination justify-content-center">
                                        <li className="page-item">
                                             <button className="page-link">Prev</button>
                                        </li>
                                        <li className="page-item">
                                             <button className="page-link">1</button>
                                        </li>
                                        <li className="page-item">
                                             <button className="page-link">2</button>
                                        </li>
                                        <li className="page-item">
                                             <button className="page-link">3</button>
                                        </li>
                                        <li className="page-item">
                                             <button className="page-link">Next</button>
                                        </li>
                                   </ul>
                              </nav>
                         </>
                    )}

                

               </section>
          </main>
     )
};
export default CustomerPage;

{/* <FontAwesomeIcon icon="fa-solid fa-spinner" spin size="3x"/> */}