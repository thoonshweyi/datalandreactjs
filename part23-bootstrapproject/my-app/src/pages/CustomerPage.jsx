import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux"
import {Link} from "react-router";

import {fetchFurnitures} from "./../store/customerSlice";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSpinner,faExclamation,faTag,faSearch,faTimes} from "@fortawesome/free-solid-svg-icons"

import banner4 from "../assets/img/banner/banner4.jpg"

const CustomerPage = ()=>{
     const {loading,error,datas} = useSelector((state)=>state.furnitures)
     
     const [searchItem,setSearchItem] = useState("");
     const [filterDatas,setFilterDatas] = useState([]);
     
     const dispatch = useDispatch();

     useEffect(()=>{
          dispatch(fetchFurnitures());
     },[dispatch]);

     useEffect(()=>{

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
                    {/*  cards */}
                    <div className="row g-4">
                         {
                              !loading && !error &&
                              displaydatas.map((data,idx)=>(
                                   <div className="col-lg-3 col-md-4" key={data.id}>
                                        <div className="card h-100">
                                             <img src={data.thumbnail || data.images?.[0]}  className="card-img-top p-3" alt={data.title} style={{height:"200px",objectFit:"contain"}} />
                                             <div className="card-body">
                                                  <h5 className="card-title text-dark">{data.title}</h5>
                                                  <p className="card-text text-muted small">
                                                       {data.description.substring(0,80,)}....
                                                  </p>
                                                  <div className="d-flex justify-content-between align-items-center mt-auto">
                                                       <span className="fw-bold text-success">
                                                            <FontAwesomeIcon icon={faTag} className="me-1" />
                                                            {data.price}
                                                       </span>
                                                       <Link to={`/furnitures/${data.id}`}  className="btn btn-sm btn-dark">View</Link>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>                       
                              ))
                         }
                    </div>

               </section>
          </main>
     )
};
export default CustomerPage;

{/* <FontAwesomeIcon icon="fa-solid fa-spinner" spin size="3x"/> */}