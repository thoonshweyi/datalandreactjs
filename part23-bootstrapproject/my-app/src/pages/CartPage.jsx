import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft,faBoxOpen,faStar,faTrash,faSpinner,faExclamation,faTag,faShoppingCart} from "@fortawesome/free-solid-svg-icons"
 
import banner4 from "../assets/img/banner/banner4.jpg"


const CartPage = ()=>{
     const navigate = useNavigate();
     const [carts,setCarts] = useState([]);
     const [loading,setLoading] = useState(true);

     useEffect(()=>{
          const getcarts = JSON.parse(localStorage.getItem('cart')) || []; // abccart // companynamecart
          setCarts(getcarts);

     },[]);

     const removeHandler = (productid)=>{
          const updatecart = carts.filter(cart => cart.id != productid);
          setCarts(updatecart);
          localStorage.setItem("cart", JSON.stringify(updatecart));
     }

     const clearHandler = (id)=>{
          setCarts([]);
          localStorage.removeItem("cart");
     }

     // if(carts.length == 0){
     //      return (
     //           <div className="container text-center py-3">
     //                <h3>Your cart is empty</h3>
     //                <button type="button" className="btn btn-outline-secondary mb-4" onClick={()=>navigate(-1)}><FontAwesomeIcon icon={faArrowLeft} />Back To Shop</button>
     //           </div>
     //      )
     // }

     const total = carts.reduce((prev,next)=>prev + next.price * (next.qty || 1),0);
     
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

               
   
               { (carts && carts.length > 0) &&
                    <section className="container py-5">

                         <button type="button" className="btn btn-outline-secondary mb-4" onClick={()=>navigate(-1)}><FontAwesomeIcon icon={faArrowLeft} />Back</button>

                         <div className="d-flex justify-content-between aligh-items-center mb-4">
                              <h4><FontAwesomeIcon icon={faShoppingCart} className="me-2"/>Your Cart</h4>
                              <button type="button" className="btn btn-danger btn-sm" onClick={clearHandler}>Clear Cart</button>
                         </div>
                         {/* product cards */}
                         <div className="row g-4">
                              {
                                   carts.map(item=>(
                                        <div key={item.id} className="col-lg-4 col-md-6 text-center">
                                             <div className="card h-100 shadow-sm">
                                                  <img src={ item.thumbnail || item.images?.[0] } className="card-img-top p-3" style={{height:"200px",objectFit:"contain"}} alt={item.title} />

                                                  <div className="card-body d-flex flex-column">
                                                       <span className="card-title">{item.title}</span>
                                                       <span className="card-itle">{item.description?.substring(0.70)}....</span>
                                                       
                                                       <div className="d-flex justify-content-between mt-auto">
                                                            <span className="fw-bold text-success">
                                                                 <FontAwesomeIcon icon={faTag} className="me-1"/>{item.price}
                                                            </span>
                                                            <button className="btn btn-sm btn-outline-danger" onClick={()=>removeHandler(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   ))
                              }

                              
                         

                         </div>

                         {/* Card Total */}
                         <div className="bg-light rounded shadow-sm p-4 mt-5">
                              <h4>Total: <span className="text-success">${total.toFixed(2)}</span></h4>
                              <button type="button" className="btn btn-dark mt-3" onClick={()=>navigate("/checkout")}>Proceed to Checkout</button>
                         </div>

                    </section>
              }

               {
                    carts.length == 0 ?
                    (
                         <div className="container text-center py-3">
                              <h3>Your cart is empty</h3>
                              <button type="button" className="btn btn-outline-secondary mb-4" onClick={()=>navigate("/furnitures")}><FontAwesomeIcon icon={faArrowLeft} />Back To Shop</button>
                         </div>
                    ) : ''
               
               }
          </main>
     )
};
export default CartPage;

{/* <FontAwesomeIcon icon="fa-solid fa-spinner" spin size="3x"/> */}
    