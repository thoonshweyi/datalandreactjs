import React from "react";

import services1 from "../assets/img/icon/services1.png"
import services2 from "../assets/img/icon/services2.png"
import services3 from "../assets/img/icon/services3.png"
import services4 from "../assets/img/icon/services4.png"
import services5 from "../assets/img/icon/services5.png"
import services6 from "../assets/img/icon/services6.png"


const Furniture = ()=>{
     const services = [
          {
               id:1,
               image:services1,
               title:"Fast services",
               description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          },
          {
               id:2,
               image:services2,
               title:"Secure payments",
               description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          },
          {
               id:3,
               image:services3,
               title:"Expert team",
               description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          },
          {
               id:4,
               image:services4,
               title:"Affordable services",
               description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          },
          {
               id:5,
               image:services5,
               title:"90 Days warranty",
               description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          },
          {
               id:6,
               image:services6,
               title:"Award winning",
               description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          },
     ]

     return (
         <>
          {/* Start Furniture Services Section */}
          <section id="furniture" className="bg-light text-center py-3">
               <div className="container">
                    {/* start title */}
                    <div className="row">
                         <div className="col">
                         <h3 className="titles">Furniture Services</h3>
                         <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                         </div>
                    </div>
                    {/* end title */}

                    <div className="row furicons">

                         {
                              services.map((service)=>(
                                   <div key={service.id} className="col-md-4">
                                        <img src={service.image} alt="services6"/>
                                        <h4>{service.title}</h4>
                                        <p>{service.description}</p>
                                   </div>
                              ))
                         }
                    </div>
               </div>
          </section>
          {/* End Furniture Services Section */}
         </>
     )
};
export default Furniture;