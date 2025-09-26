import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft,faBoxOpen,faStar,faTrash,faSpinner,faExclamation,faTag,faShoppingCart,faTruck,faCreditCard,faMoneyBill} from "@fortawesome/free-solid-svg-icons"
import { ToastContainer, toast } from 'react-toastify';

import banner4 from "../assets/img/banner/banner4.jpg"


const CheckoutPage = ()=>{
     const navigate = useNavigate();
     const [carts,setCarts] = useState([]);
     const [form,setForm] = useState({
          fullname: "",
          email: "",
          phone:"",
          address:"",
          city:"",
          zip:"",
          country:""
     });
     const [payment,setPayment] = useState('card');

     const [loading,setLoading] = useState(true);


     useEffect(()=>{
          const getcarts = JSON.parse(localStorage.getItem('cart')) || []; // abccart // companynamecart
          setCarts(getcarts);

     },[]);

     const subtotal = carts.reduce((sum,cart)=>sum + (cart.price * cart.qty) ,0);
     const shipping = +subtotal < 300 ? 10 : 0 ;
     const tax = +(subtotal * 0.1).toFixed(2);
     const grandtotal = subtotal + shipping + tax; 

     const changeHandler = (e)=>{
          setForm({...form,[e.target.name]:e.target.value});
     }

     const placeorderHandler = ()=>{
          if(!form.fullname || !form.email || !form.phone || !form.address){
               console.log("No form data");
               toast.error("Please fill in all require info!")

               return;
          }
          localStorage.removeItem("cart");
          toast.success(`Order placed successfully! Total: $ ${grandtotal.toFixed(2)} | Payment: ${payment}`)


          setTimeout(()=>{
               navigate("/");
          },3000); // redirect to index after 3s
     };

     return (
          <main className="bg-light">
               <ToastContainer />

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
                                                       <input type="text" name="fullname" id="fullname" className="form-control" value={form.fullname} onChange={changeHandler} required/>
                                                  </div>

                                                  <div className="col-md-6">
                                                       <label htmlFor="email" className="form-label">Email *</label>
                                                       <input type="email" name="email" id="email" className="form-control" value={form.email} onChange={changeHandler} required/>
                                                  </div>

                                                  <div className="col-md-6">
                                                       <label htmlFor="phone" className="form-label">Phone *</label>
                                                       <input type="text" name="phone" id="phone" className="form-control" value={form.phone} onChange={changeHandler} required/>
                                                  </div>

                                                  <div className="col-md-12">
                                                       <label htmlFor="address" className="form-label">Address * </label>
                                                       <input type="text" name="address" id="address" className="form-control" value={form.address} onChange={changeHandler} required/>
                                                  </div>
                                                  
                                                  <div className="col-md-4">
                                                       <label htmlFor="city" className="form-label">City </label>
                                                       <input type="text" name="city" id="city" className="form-control" value={form.city} onChange={changeHandler}/>
                                                  </div>

                                                  <div className="col-md-4">
                                                       <label htmlFor="zip" className="form-label">Zip Code </label>
                                                       <input type="text" name="zip" id="zip" className="form-control" value={form.zip} onChange={changeHandler}/>
                                                  </div>

                                                  <div className="col-md-4">
                                                       <label htmlFor="country" className="form-label">Country </label>
                                                       <input type="text" name="country" id="country" className="form-control" value={form.country} onChange={changeHandler}/>
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
                                             <input type="radio" name="payment" id="cd" className="form-check-input" value="card" onChange={(e)=>setPayment(e.target.value)}/> 
                                             <label htmlFor="cd" className="form-check-label">Credit / Debit Card</label>
                                        </div>

                                        <div className="form-check">
                                             <input type="radio" name="payment" id="bt" className="form-check-input" value="bank" onChange={(e)=>setPayment(e.target.value)}/> 
                                             <label htmlFor="bt" className="form-check-label">Bank Transfer</label>
                                        </div>

                                        <div className="form-check">
                                             <input type="radio" name="payment" id="cod" className="form-check-input" value="cod" onChange={(e)=>setPayment(e.target.value)}/> 
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
                                             {
                                                  carts.map(cart=>(
                                                       <li key={cart.id} className="list-group-item d-flex justify-content-between">
                                                            <div>
                                                                 <h6>{cart.title}</h6>
                                                                 <small className="text-muted">Qty: {cart.qty}</small>
                                                            </div>
                                                            <span>$ {(cart.price * cart.qty.toFixed(2)) }</span>
                                                       </li>
                                                  ))
                                             }

                                             <li className="list-group-item d-flex justify-content-between">
                                                  <strong>Subtotal</strong>
                                                  <span>$ {subtotal.toFixed(2)}</span>
                                             </li>

                                             <li className="list-group-item d-flex justify-content-between">
                                                  <strong>Shipping</strong>
                                                  <span>{shipping == 0 ? "Free" : `$ ${shipping}`}</span>
                                             </li>

                                             <li className="list-group-item d-flex justify-content-between">
                                                  <strong>Tax (10%)</strong>
                                                  <span>$ {tax.toFixed(2)}</span>
                                             </li>

                                             <li className="list-group-item d-flex justify-content-between">
                                                  <strong>Grand Total</strong>
                                                  <span>$ {grandtotal.toFixed(2)}</span>
                                             </li>
                                        </ul>

                                        <button type="button" className="w-100 btn btn-dark" onClick={placeorderHandler}> <FontAwesomeIcon icon={faMoneyBill} className="me-2" /> Place Order</button>
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

// =>react tostify
//        https://www.npmjs.com/package/react-toastify
//        https://fkhadra.github.io/react-toastify/introduction