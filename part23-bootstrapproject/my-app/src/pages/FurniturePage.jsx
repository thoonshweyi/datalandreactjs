import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux"
import {fetchFurnitures} from "./../store/furnitureSlice";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSpinner,faExclamation,faTag} from "@fortawesome/free-solid-svg-icons"

import banner4 from "../assets/img/banner/banner4.jpg"
const FurniturePage = ()=>{
     const {loading,error,datas} = useSelector((state)=>state.furnitures)
     const dispatch = useDispatch();

     useEffect(()=>{
          dispatch(fetchFurnitures());
     },[dispatch]);

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
                    <div className="container bg-dark bg-opacity-50 rounded">
                         <h1 className="display-6">Furniture Collection</h1>
                         <p className="lead">Discover modern, stylish, and comfortable furniture for your home.</p>
                    </div>
               </section>

               <section className="container py-5">

                    <div className="text-center mb-5">
                         <h3 className="fw-bold mb-4">Available Products</h3>
                    </div>

                    {/* loading */}
                    {loading && (
                         <div className="text-center">
                              <FontAwesomeIcon icon={faSpinner} spin className="text-warning"/>
                              <p className="mt-2">Loading furniture....</p>
                         </div>
                    )}

                    {/* error */}
                    {error && (
                         <div className="alert alert-danger text-center">
                              <FontAwesomeIcon icon={faExclamation} className="text-danger me-2"/>
                              {error}
                         </div>
                    )}
                    {/* product cards */}
                    <div className="row g-4">
                         {
                              !loading && !error &&
                              datas.map((data,idx)=>(
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
                                                       <button className="btn btn-sm btn-dark">View</button>
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
export default FurniturePage;

{/* <FontAwesomeIcon icon="fa-solid fa-spinner" spin size="3x"/> */}