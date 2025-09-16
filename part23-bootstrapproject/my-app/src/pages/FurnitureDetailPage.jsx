import React,{useState,useEffect} from "react";
import {useParams,useNavigate} from "react-router"
import axios from "axios"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft,faBoxOpen,faStar,faSpinner,faExclamation,faTag,faShoppingCart} from "@fortawesome/free-solid-svg-icons"
 
import banner4 from "../assets/img/banner/banner4.jpg"

import {Link} from "react-router";

const FurnitureDetailPage = ()=>{
     const{id} = useParams();
     const navigate = useNavigate();
     const [item,setItem] = useState(null); 
     const [loading,setLoading] = useState(true);
     const [added,setAdded] = useState(false);

     useEffect(()=>{
          axios.get(`https://dummyjson.com/product/${id}`)
          .then(res=>{
               //console.log(res.data);

               setItem(res.data);
               setLoading(false);

               // console.log(item); // null

               // check if product already exists in localStorage
               const getcarts = JSON.parse(localStorage.getItem("cart")) || [];
               const exists = getcarts.find(getcart=>getcart.id == res.data.id)
               
               if(exists){
                    setAdded(true);
               }
          }).catch(err=>{
               console.error(`Error fetching product: ${err}`);
               setLoading(false);
          })
     },[id]);
   
     const addToCardHandler = ()=>{
          const cartdatas = JSON.parse(localStorage.getItem("cart")) || [];
          const exists = cartdatas.find(cartdata=> cartdata.id == "item.id");

          if(exists){
               // cartdatas.push();
               // localStorage.setItem("cart",JSON.stringify("item"));

          }
          setAdded(true);

     }

     // if(loading){
     //      return (
     //           <div className="text-center py-5">
     //                <FontAwesomeIcon icon={faSpinner} spin className="text-warning"/>
     //                <p className="mt-2">Loading product....</p>
     //           </div>
     //      )
     // }

     // if(!item){
     //      return <p class="text-center text-danger">Product not found</p>
     // }
    
     return (
          <main className="bg-light">

               {
                    loading ? (
                         <div>

                         </div>
                    ) : !item ? (
                         <p class="text-center text-danger">Product not found</p>
                    ):(
                         <>
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

                         
                              {/* product cards */}
                              <div className="row g-4">
                                   {/* product image gallery       */}
                                   <div className="col-md-6 text-center">
                                        <div className="card shadow-sm p-3">
                                             <img src={ item.thumbnail || item.images?.[0] } className="img-fluid rounded" style={{maxHeight:"400px",objectFit:"contain",cursor:"pointer"}} alt={item.title} />
                                        </div>

                                        <div className="d-flex justify-content-center gap-2 mt-3 flex-wrap">
                                             {
                                                  item.images?.map((img,index)=>(
                                                       <img key={index} src={ img } className="img-thumbnail" style={{width:"80px",height:"80px",objectFit:"cover",cursor:"pointer"}} alt={`${item.title}-${index}`} />
                                                  ))
                                             }
                                        </div>
                                   </div>
                                   {/* product info */}
                                   <div className="col-md-6">
                                        <h2>{item.title}</h2>
                                        <p className="text-muted">{item.description}</p>

                                        <h4 className="text-success">
                                             <FontAwesomeIcon icon={faTag} className="me-2" />
                                             {item.price}
                                        </h4>

                                        <p>
                                             <FontAwesomeIcon icon={faStar} className="text-warning me-2" />
                                             <strong>{item.rating}</strong>/5
                                        </p>

                                        <p>
                                             <FontAwesomeIcon icon={faBoxOpen} className="me-2" />
                                             
                                             Stock: <span className={item.stock > 0 ? 'text-success fw-bold' : 'text-danger fw-bold'}>{item.stock > 0 ? `${item.stock} available` : `Out of stock`}</span>
                                        </p>

                                        <div className="d-flex gap-2 mt-3">
                                             <button type="button" className="btn btn-dark " onClick={addToCardHandler}>{added ? "Added to Cart" : 'Add to Cart'}</button>
                                             
                                             {added && (
                                                  <button type="button" className="btn btn-outline-primary" onClick={()=>navigate("/carts")}>
                                                       <FontAwesomeIcon icon={faShoppingCart} className="me-2"/>Go to Cart
                                                  </button>
                                             )}
                                             
                                        </div>

                                   </div>


                              </div>

                              {/* Relative Info */}
                              <div>
                                   <h4>Product Details</h4>
                                   <ul className="list-group">
                                        <li className="list-group-item"><strong>Brand: </strong> {item.brand}</li>
                                        <li className="list-group-item"><strong>Category: </strong> {item.category}</li>
                                        <li className="list-group-item"><strong>Discount: </strong> {item.discountPercentage} %off</li>
                                   </ul>
                              </div>

                         </section>
                         </>
                    )
               }

               
          </main>
     )
};
export default FurnitureDetailPage;

{/* <FontAwesomeIcon icon="fa-solid fa-spinner" spin size="3x"/> */}
    