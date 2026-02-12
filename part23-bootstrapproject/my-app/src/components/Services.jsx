import React,{useState,useEffect} from "react";

import image1 from "./../assets/img/gallery/image1.jpg"
import image2 from "./../assets/img/gallery/image2.jpg"
import image3 from "./../assets/img/gallery/image3.jpg"
import image4 from "./../assets/img/gallery/image4.jpg"
import image5 from "./../assets/img/gallery/image5.jpg"
import image6 from "./../assets/img/gallery/image6.jpg"

const Services = ()=>{
     
     const [images, setImages] =useState({});

     
     useEffect(()=>{
          
          const importimages = async ()=>{
               try{ 

                    const imageModules = await Promise.all([
                         import("../assets/img/gallery/image1.jpg"),
                         import("../assets/img/gallery/image2.jpg"),
                         import("../assets/img/gallery/image3.jpg"),
                         import("../assets/img/gallery/image4.jpg"),
                         import("../assets/img/gallery/image5.jpg"),
                         import("../assets/img/gallery/image6.jpg")
                    ]);

                    // console.log(imageModules) // (6) [Module, Module, Module, Module, Module, Module]
                    // console.log(imageModules[0].default) // /src/assets/img/gallery/image1.jpg


                    setImages({
                         image1: imageModules[0].default, // image1: "/src/assets/img/gallery/image1.jpg"
                         image2: imageModules[1].default,
                         image3: imageModules[2].default,
                         image4: imageModules[3].default,
                         image5: imageModules[4].default,
                         image6: imageModules[5].default,
                    });
                    // console.log(images)
               }   catch(err){
                    console.error("Error loading image: ",err);
               }
          }
          importimages();

          // console.log(import("../assets/img/gallery/image1.jpg")) // Promise {<pending>}
     },[])

     const datas = [
          {
               imgname: "image1",
               rooname: "Living Room"
          },
          {
               imgname: "image2",
               rooname: "Mini Bar"
          },
          {
               imgname: "image3",
               rooname: "Dining Room"
          },
          {
               imgname: "image4",
               rooname: "Meeting Room"
          },
           {
               imgname: "image5",
               rooname: "Bed Room"
          },
          {
               imgname: "image6",
               rooname: "Pantry Room"
          },
     ];

     // console.log(Object.keys(images)); // (6) ['image1', 'image2', 'image3', 'image4', 'image5', 'image6']
     if(Object.keys(images).length === 0){
          return <div className="text-center py-5">Loading images....</div>
     }

     return (
         <>
          {/*-- Start Services Section*/}
               <section id="services" className="py-4 services">
                    <div className="container-fluid">

                    {/*-- start title*/}
                         <div className="row text-center">
                         <div className="col-12">
                              <h3 className="titles text-light">Our Services</h3>
                              <p className="lead text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                         </div>
                         </div>
                    {/*-- end title*/}

                         <div className="row">
                              {
                                   datas.map((data,idx)=>(
                                        <div key={idx} className="col-lg-4 col-md-6 mb-3">
                                             <div className="card border-0 servicecards">
                                                  <img src={images[data.imgname]} alt="image1"/>
                                                  <h5 className="text-white text-uppercase fw-bold py-2 servicetexts">{data.rooname}</h5>
                                             </div>
                                        </div>
                                   ))
                              }
                             
                         
                         </div>

                    </div>
               </section>
          {/*-- End Services Section*/}
         </>
     )
};
export default Services;



// -------------------------------------------
// *result 
// console.log(import("../assets/img/gallery/image1.jpg"))
// Promise {<pending>}
// [[Prototype]]: Promise
// catch: ƒ catch()
// constructor: ƒ Promise()
// finally: ƒ finally()
// then: ƒ then()
// Symbol(Symbol.toStringTag): "Promise"
// [[Prototype]]: Object
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Module


// *result 
// imageModules

// (6) [Module, Module, Module, Module, Module, Module]
// 0: Module {Symbol(Symbol.toStringTag): 'Module'}
// 1: Module {Symbol(Symbol.toStringTag): 'Module'}
// 2: Module {Symbol(Symbol.toStringTag): 'Module'}
// 3: Module {Symbol(Symbol.toStringTag): 'Module'}
// 4: Module {Symbol(Symbol.toStringTag): 'Module'}
// 5: Module
// default: "/src/assets/img/gallery/image6.jpg"
// Symbol(Symbol.toStringTag): "Module"
// get default: ƒ ()
// set default: ƒ ()
// length: 6
// [[Prototype]]: Array(0)


// Testing Image not avialable 
// -Empty imageModules 

// -const datas = [
//      {
//           imgname: "image1",
//           rooname: "Living Room"
//      },
     
//      {
//           imgname: "image60",
//           rooname: "Pantry Room"
//      },
// ];
// Image link broken

// -setImages({
//      image1: imageModules[0].default,
//        ....
//      image6: imageModules[50].default,
// });
// Services.jsx?t=1752854876324:50 Error loading image:  TypeError: Cannot read properties of undefined (reading 'default')
//     at importimages (Services.jsx?t=1752854876324:47:36)