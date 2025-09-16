import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft,faBoxOpen,faStar,faTrash,faSpinner,faExclamation,faTag} from "@fortawesome/free-solid-svg-icons"
 
import banner4 from "../assets/img/banner/banner4.jpg"


const CartPage = ()=>{
     const navigate = useNavigate();
     const [loading,setLoading] = useState(true);

     useEffect(()=>{
          
     },[]);
   
     return (
          <main className="bg-light">
               {/* Banner */}
               <section className="text-center  text-light d-flex justifiy-content-center align-items-center" style={{
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

                    <button type="button" className="btn btn-outline-secondary mb-4" onClick={()=>navigate(-1)}><FontAwesomeIcon icon={faArrowLeft} />Back</button>

                    {/* loading */}
                    {loading && (
                         <div className="text-center">
                              <FontAwesomeIcon icon={faSpinner} spin className="text-warning"/>
                              <p className="mt-2">Loading furniture....</p>
                         </div>
                    )}

                    
                    {/* product cards */}
                    <div className="row g-4">
                         <div className="col-lg-4 col-md-6 text-center">
                              <div className="card h-100 shadow-sm">
                                   <img src="a" className="" style={{height:"200px",objectFit:"contain"}} alt="" />
                              </div>

                              <div>
                                   <span className="fw-bold text-success">1000</span>
                                   <button className="btn btn-sm btn-outline-danger"><FontAwesomeIcon icon={faTrash} /></button>
                                   
                              </div>
                         </div>
                       

                    </div>

                    {/* Card Total */}
                    <div className="bg-light rounded shadow-sm p-4 mt-5">
                         <h4>Total: <span className="text-success">1000</span></h4>
                         <button type="button" className="btn btn-dark mt-3">Proceed to Checkout</button>
                    </div>

               </section>
          </main>
     )
};
export default CartPage;

{/* <FontAwesomeIcon icon="fa-solid fa-spinner" spin size="3x"/> */}
    