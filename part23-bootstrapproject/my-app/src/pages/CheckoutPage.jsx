import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft,faTimes,faShoppingCart,faTruck,faCreditCard,faMoneyBill} from "@fortawesome/free-solid-svg-icons"
import { ToastContainer, toast } from 'react-toastify';
import {loadStripe} from "@stripe/stripe-js"
import {Elements,CardElement, useStripe ,useElements} from "@stripe/react-stripe-js"
import axios from "axios"

import banner4 from "../assets/img/banner/banner4.jpg"

const stripePromise = loadStripe('pk_test_51SIu70H9Bv5kOs06ZVWXdieZDRHargVJAz23lQHmFxyKaFwiTy5DRvoys2mApqnhL7hf15CqGo05vw08HkQr6cUM00OXUGH8lD');

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
     const [payment,setPayment] = useState();

     const [bankSlip,setBankSlip] = useState(null);
     const [slipPreview,setSlipPreview] = useState(null);

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

     const qtychangeHandler = (productid,delta)=>{
          const updatecart = carts.map(cart=>( cart.id == productid ? {...cart,qty: Math.max(1,(cart.qty || 1) + delta)} : cart ));

          setCarts(updatecart);
          localStorage.setItem('cart',JSON.stringify(updatecart));
     }

     const bankslipHandler = (e)=>{
          const file = e.target.files[0];

          if(file){
               setBankSlip(file);
               setSlipPreview(URL.createObjectURL(file));
          }
          // console.log(file);
     }

     const placeorderHandler = async()=>{

          if(carts.length === 0){
               toast.error("Your cart is empty");
               return;
          }

          if(!form.fullname || !form.email || !form.phone || !form.address){
               console.log("No form data");
               toast.error("Please fill in all require info!")

               return;
          }

          const orderData = {
               orderId: "ORD-"+Date.now(),
               items: carts,
               subtotal,
               shipping,
               tax,
               grandtotal,
               paymentmethod: payment,
          }

          if(payment === "card"){
               // redirect to payment gateway
               toast.info("Proceed with card payment below.")
          }else if(payment === "bank"){
              
               if(!bankSlip){
                    toast.error("Please upload your bank transfer slip!");
                    return;
               }

               const formData = new FormData();
               formData.append("fullname",form.fullname);
               formData.append("email",form.email);
               formData.append("phone",form.phone);
               formData.append("address",form.address);
               formData.append("zip",form.zip);
               formData.append("country",form.country);
               formData.append("grandtotal",grandtotal);
               formData.append("bankslip",bankSlip); // **** this name "bankslip" should match server side

               try{
                    const res = await axios.post(`http://localhost:5000/api/payments/bank`,formData,{
                         headers: {"Content-Type":"multipart/form-data"}
                    })
                    
                    toast.success("Bank slip uploaded successfully!");

                    localStorage.removeItem("cart");
                    setCarts([]);

                    // Navigate to order success page with order data
                    navigate("/order-success",{state:{orderData}});

               }catch(err){
                    toast.error("Upload failed. Please try again.");
                    console.error(err);
               }


          }else if(payment === "cod"){
               toast.success(`Order placed with Cash On Delivery!`);
               localStorage.removeItem("cart");
               setCarts([]);

               // Navigate to order success page with orderData
               navigate("/order-success",{state:{orderData}});
          }else{
               toast.error("Select a payment method.");
               return;
          }

     };

     const removeHandler = (productid)=>{
          const updatecart = carts.filter(cart => cart.id != productid);
          setCarts(updatecart);
          localStorage.setItem("cart", JSON.stringify(updatecart));
     }
     // Stripe Card Form Component
     const StripePaymentForm = ({gdtotal,onSuccess})=>{
          const stripe = useStripe();
          const elements = useElements();
          const [loading,setLoading] = useState(false);

          if(!stripe || !elements) return;

          const submitHandler = async(e)=>{
               e.preventDefault();

               setLoading(true); // start loading

               try{
                    const {data} = await axios.post(`http://localhost:5000/create-payment-intent`,{
                         amount: gdtotal
                    });
                    console.log(data);

                    const result = await stripe.confirmCardPayment(data.clientSecret,{
                         payment_method: {
                              card: elements.getElement(CardElement)
                         }
                    })

                    console.log(result);

                    if(result.error){
                         toast.error(result.error.message);
                    }else if(result.paymentIntent.status === "succeeded"){
                         toast.success("Payment Successful!");
                         onSuccess();
                    }

               }catch(error){
                    toast.error(`Payment failed. Please try again!`);
                    console.log(error);
               }finally{
                    setLoading(false); // stop loading
               }
          }

          return (
               <form onSubmit={submitHandler} className="mt-3">
                    <CardElement className="form-control p-3 mb-3 border" />
                    <button type="submit" className="w-100 btn btn-success d-flex justify-content-center align-items-center" disabled={loading}>
                         { loading ? (<><div className="spinner-border spinner-border-sm me-2"></div> Processing....</>) : (<>Pay ${grandtotal.toFixed(2)}</>) }
                    </button>
               </form>
          )
     }

     return (
          <main className="bg-light">
               <ToastContainer/>

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
                                        
                                        {/* Radio buttons */}

                                        {
                                             ["card","bank","cod"].map(method=>(
                                                  <div className="form-check" key={method}>
                                                       <input type="radio" name="payment" id={`${method}-payment`} className="form-check-input" value={method} onChange={(e)=>setPayment(e.target.value)}/> 
                                                       <label htmlFor={`${method}-payment`} className="form-check-label">{
                                                            method === "card" ? "Credit / Debit Card" : method === "bank" ? "Bank Transfer" : "Cash on Delivery"     
                                                       }</label>
                                                  </div>
                                             ))
                                        }
                                      
                                        {/* show / hide card form */}
                                        {/* {payment === "card" && (
                                        <div className="border p-3 rounded bg-light">
                                             <div className="mb-3">
                                                  <label className="form-label" htmlFor="cardnumber">Card Number</label>
                                                  <input type="text" id="cardnumber" className="form-control" placeholder="1234 5678 9012 3456" />
                                             </div>


                                             <div className="row">
                                                  <div className="col-md-6 mb-3">
                                                       <label className="form-label rounded-0" htmlFor="expirydate">Expiry Date</label>
                                                       <input type="text" id="expirydate" className="form-control rounded-0" placeholder="MM/YY" />
                                                  </div>
                                                  <div className="col-md-6 mb-3">
                                                       <label className="form-label rounded-0" htmlFor="cvv">CVV</label>
                                                       <input type="text" id="cvv" className="form-control rounded-0" placeholder="1234" />
                                                  </div>
                                             </div>

                                             <div className="mb-3">
                                                  <label className="form-label" htmlFor="cardholdername">Cardholder Name</label>
                                                  <input type="text" id="cardholdername" className="form-control" placeholder="Nyein Change Aung" />
                                             </div>
                                        </div>
                                        )} */}

                                             {/* show /hide stripe form */}
                                        {payment === "card" && (
                                             <Elements stripe={stripePromise}>
                                                  <StripePaymentForm gdtotal={grandtotal} onSuccess={
                                                       ()=>{

                                                            const orderData = {
                                                                 orderId: "ORD-"+Date.now(),
                                                                 items: carts,
                                                                 subtotal,
                                                                 shipping,
                                                                 tax,
                                                                 grandtotal,
                                                                 paymentmethod: payment,
                                                            }

                                                            localStorage.removeItem("cart");
                                                            setCarts([]);

                                                            // Navigate to order success page with orderData
                                                            navigate("/order-success",{state:{orderData}});
                                                       }
                                                  }></StripePaymentForm>
                                             </Elements>
                                        )}

                                        {/* show / hide bank transfer form */}
                                        {payment === "bank" && (
                                        <div className="bg-light border rounded p-3">
                                             <h6>Bank Transfer Instructions</h6>
                                             <p className="text-muted mb-2">Please transfer the total amount to our bank</p>
                                             <ul>
                                                  <li><strong>Bank: </strong> KBZ Pay</li>
                                                  <li><strong>Kpay Name: </strong> Dataland Col,Ltd</li>
                                                  <li><strong>Kpay No: </strong> 09422042225</li>
                                             </ul>

                                             <hr/>

                                             <label className="form-label fw-bold">Upload Payment Slip *</label>
                                             <input type="file" className="form-control mb-3" onChange={bankslipHandler} accept="image/*,application/pdf"/>
                                        
                                             {slipPreview &&(
                                                  <div>
                                                       <p className="mb-1">Preview:</p>
                                                       <img src={slipPreview} className="img-fluid rounded border" alt="bank slip preview" style={{maxHeight:"250px",objectFit:""}} />
                                                  </div>
                                             )}
                                             
                                        </div>

                                        )}

                                   </div>
                              </div>
                         </div>
                         <div className="col-md-5">
                              <div className="card shadow-sm mb-4">
                                   <div className="card-body">
                                        <h5 className="3">Order Summary</h5>

                                        <ul className="list-group mb-3">
                                             {
                                                  carts.map((cart,index)=>(
                                                       <li key={cart.id} className="list-group-item d-flex justify-content-between">
                                                            <div>
                                                                 <h6 className="my-0"><span className="me-2">{index+1}. </span> {cart.title}</h6>

                                                                 {/* Qty Control */}
                                                                 <div className="d-flex align-items-center mt-2">
                                                                      <button type="button" className="btn btn-sm btn-outline-dark rounded-circle d-flex justify-content-center align-items-center" style={{width:"20px",height:"20px"}} onClick={()=>qtychangeHandler(cart.id, -1)}> - </button>
                                                                      <small className="fw-bold mx-2">Qty: {cart.qty}</small>
                                                                      <button type="button" className="btn btn-sm btn-outline-dark rounded-circle d-flex justify-content-center align-items-center" style={{width:"20px",height:"20px"}} onClick={()=>qtychangeHandler(cart.id, 1)}> + </button>
                                                                 </div>
                                                            </div>

                                                            <div style={{flex:"none"}}>
                                                                 <span>$ {(cart.price * cart.qty).toFixed(2) }</span>
                                                                 <button type="button" className="btn btn-link text-sm" onClick={()=>removeHandler(cart.id)}><FontAwesomeIcon icon={faTimes} /></button>
                                                            </div>
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
                                        

                                        {/* button hide when "cad" selected  */}
                                        {
                                             payment !== "card" && (
                                                  <button type="button" className="w-100 btn btn-dark" onClick={placeorderHandler}> 
                                                  <FontAwesomeIcon icon={faMoneyBill} className="me-2" /> 
                                                  {
                                                  payment === "bank" ? "Pay with Bank" : payment === "cod" ? "Place Order" : "Select Payment Method"
                                                  }
                                                  </button>
                                             )
                                        }
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


// 🧭 1. navigate

// navigate is a function returned by the useNavigate() hook in React Router.

// 🧳 2. The second parameter — { state: { orderData } }

// This object allows you to pass additional data to the target route without using URL parameters or query strings.

// Here,

// state is a key defined by React Router.

// { orderData } is the actual data you are passing.

// So effectively, you’re sending this data along:

// {
//   state: {
//     orderData: { id: 101, total: 50000, items: ["item1", "item2"] }
//   }
// }

// 🎯 3. How to receive that data on the next page

// On your /order-success page (or component), you retrieve it using the useLocation() hook.

// Example:

// import { useLocation } from "react-router-dom";

// const OrderSuccess = () => {
//   const location = useLocation();
//   const { orderData } = location.state || {}; // prevent crash if state is undefined

//   return (
//     <div>
//       <h1>Order Successful!</h1>
//       <p>Order ID: {orderData?.id}</p>
//       <p>Total: {orderData?.total}</p>
//     </div>
//   );
// };

// 🧠 Key Notes
// Feature	Description
// 🔒 Secure	The data is not visible in the URL (unlike query params).
// 🕒 Temporary	The state only exists during navigation; if you refresh the page, it disappears.
// 🧰 Alternative	If you want persistent data, store it in context, Redux, or localStorage.