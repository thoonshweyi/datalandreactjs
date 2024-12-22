import React from "react"
import useState from "react"

const MainForm = ()=>{
     const defaultselectvalue = "Choose a package";
     const [formState,setFormState] = useState({
          name:"",
          quantity:1,
          tags:[],
          package:""
     });
     const changeHandler = (e)=>{

     }

     const submitHandler = (e)=>{
          e.preventDefault();

          console.log(formState);
     }

     return (
          <div>
               <form action="" method="" onSubmit={submitHandler}>
                    <div className="row">
                         <div className="form-group col-md-6 mb-3">
                              <label htmlFor="name">Customer Name</label>
                              <input type="text" name="name" id="name" className="form-control form-control-sm rounded-0" placeholder="Enter Customer Name" onChange={changeHandler} value={formState.name}/>
                         </div>

                         <div className="form-group col-md-6 mb-3">
                              <label htmlFor="quantity">Quantity</label>
                              <input type="number" name="quantity" id="quantity" className="form-control form-control-sm rounded-0" onChange={changeHandler} value={formState.quantity}/>
                         </div>

                         <div className="form-group col-md-6 mb-3">
                              <label htmlFor="quantity">Choose Tag</label>
                              <Tag tagName="Washing" selected="Washing"/>
                              <Tag tagName="Drying" selected="Drying"/>
                              <Tag tagName="Delivery" selected={true}/>
                         </div>

                         <div className="form-group col-md-6 mb-3">
                              <label htmlFor="name">Package</label>
                              <select name="package" id="package" className="form-control form-control-sm rounded-0" onChange={changeHandler} value={formState.package}>
                                   <option selected disabled value="">{defaultselectvalue}</option>
                                   <option value="regular">Regular</option>
                                   <option value="urgent">Urgent</option>
                              </select>
                         </div>

                         <div className="d-grid mb-3">
                              <button type="number" className="btn btn-primary btn-sm rounded-0">Submit</button>
                         </div>
                    </div>
               </form>
          </div>
     )
}
export default MainForm;