import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft,faBoxOpen,faStar,faTrash,faSpinner,faExclamation,faTag,faShoppingCart,faTruck,faCreditCard,faMoneyBill} from "@fortawesome/free-solid-svg-icons"
 
import banner4 from "../assets/img/banner/banner4.jpg"


const CheckoutPage = ()=>{
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

               
   
               <section className="container py-5">

                    <button type="button" className="btn btn-outline-secondary mb-4" onClick={()=>navigate(-1)}><FontAwesomeIcon icon={faArrowLeft} />Back</button>

                    <div className="d-flex justify-content-between aligh-items-center mb-4">
                         <h4><FontAwesomeIcon icon={faShoppingCart} className="me-2"/> Checkout</h4>
                    </div>
                   

                    <div className="row">
                         <div className="col-md-7">
                              {/* shipping form */}
                              <div className="card shadow-sm mb-3">
                                   <div className="card-body">
                                        <h5 className="mb-3">
                                             <FontAwesomeIcon icon={faTruck} /> Shipping Information
                                        </h5>
                                        <form>
                                             <div className="row g-3">
                                                  <div className="col-md-6">
                                                       <label htmlFor="fullname" className="form-label">Full Name *</label>
                                                       <input type="text" name="fullname" id="fullname" className="form-control" required/>
                                                  </div>

                                                  <div className="col-md-6">
                                                       <label htmlFor="email" className="form-label">Email *</label>
                                                       <input type="email" name="email" id="email" className="form-control" required/>
                                                  </div>

                                                  <div className="col-md-6">
                                                       <label htmlFor="phone" className="form-label">Phone *</label>
                                                       <input type="text" name="phone" id="phone" className="form-control" required/>
                                                  </div>

                                                  <div className="col-md-12">
                                                       <label htmlFor="address" className="form-label">Address * </label>
                                                       <input type="text" name="address" id="address" className="form-control" required/>
                                                  </div>
                                                  
                                                  <div className="col-md-4">
                                                       <label htmlFor="city" className="form-label">City </label>
                                                       <input type="text" name="city" id="city" className="form-control"/>
                                                  </div>

                                                  <div className="col-md-4">
                                                       <label htmlFor="zip" className="form-label">Zip Code </label>
                                                       <input type="text" name="zip" id="zip" className="form-control"/>
                                                  </div>

                                                  <div className="col-md-4">
                                                       <label htmlFor="country" className="form-label">Country </label>
                                                       <input type="text" name="country" id="country" className="form-control"/>
                                                  </div>
                                                  
                                             </div>
                                        </form>
                                   </div>
                              </div>

                              {/* payment method */}
                              <div className="card shadow-sm mb-4">
                                   <div className="card-body">
                                        <h5><FontAwesomeIcon icon={faCreditCard} className="me-2"/> Payment Method</h5>
                                        <div className="form-check">
                                             <input type="radio" name="payment" id="cd" className="form-check-input" value="1" /> 
                                             <label htmlFor="cd" className="form-check-label">Credit / Debit Card</label>
                                        </div>

                                        <div className="form-check">
                                             <input type="radio" name="payment" id="bt" className="form-check-input" value="2"/> 
                                             <label htmlFor="bt" className="form-check-label">Bank Transfer</label>
                                        </div>

                                        <div className="form-check">
                                             <input type="radio" name="payment" id="cod" className="form-check-input" value="3"/> 
                                             <label htmlFor="cod" className="form-check-label">Cash on Delivery</label>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="col-md-5">
                              <div className="card shadow-sm mb-4">
                                   <div className="card-body">
                                        <h5 className="3">Order Summary</h5>

                                        <ul className="list-group mb-3">
                                             <li className="list-group-item d-flex justify-content-between">
                                                  <div>
                                                       <h6>Chair</h6>
                                                       <small className="text-muted">Qty: 1</small>
                                                  </div>
                                                  <span>$ 358.00</span>
                                             </li>

                                             <li className="list-group-item d-flex justify-content-between">
                                                  <strong>Subtotal</strong>
                                                  <span>$ 358.00</span>
                                             </li>

                                             <li className="list-group-item d-flex justify-content-between">
                                                  <strong>Shipping</strong>
                                                  <span>$ 10.00</span>
                                             </li>

                                             <li className="list-group-item d-flex justify-content-between">
                                                  <strong>Tax (10%)</strong>
                                                  <span>$ 36.00</span>
                                             </li>

                                             <li className="list-group-item d-flex justify-content-between">
                                                  <strong>Grand Total</strong>
                                                  <span>$ 396.00</span>
                                             </li>
                                        </ul>

                                        <button type="button" className="w-100 btn btn-dark"> <FontAwesomeIcon icon={faMoneyBill} className="me-2" /> Place Order</button>
                                   </div>
                              </div>
                         </div>
                    </div>

               </section>

             
          </main>
     )
};
export default CheckoutPage;

{/* <FontAwesomeIcon icon="fa-solid fa-spinner" spin size="3x"/> */}
    