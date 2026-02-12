import React,{useState,useEffect} from "react";

import image1 from "./../assets/img/gallery/image1.jpg"
import image2 from "./../assets/img/gallery/image2.jpg"
import image3 from "./../assets/img/gallery/image3.jpg"
import image4 from "./../assets/img/gallery/image4.jpg"
import image5 from "./../assets/img/gallery/image5.jpg"
import image6 from "./../assets/img/gallery/image6.jpg"

const Clients = ()=>{
     
     const [clientImages, setClientImages] =useState({});

     
     useEffect(()=>{
          
          const importclientimages = async ()=>{
               try{ 

                    const imageModules = await Promise.all([
                         import("../assets/img/clients/client1.png"),
                         import("../assets/img/clients/client2.png"),
                         import("../assets/img/clients/client3.png"),
                         import("../assets/img/clients/client4.png"),
                         import("../assets/img/clients/client5.png"),
                    ]);

                    // console.log(imageModules) // (6) [Module, Module, Module, Module, Module, Module]
                    // console.log(imageModules[0].default) // /src/assets/img/gallery/image1.jpg


                    setClientImages({
                         client1: imageModules[0].default, // client1: "/src/assets/img/gallery/image1.jpg"
                         client2: imageModules[1].default,
                         client3: imageModules[2].default,
                         client4: imageModules[3].default,
                         client5: imageModules[4].default,
                    });
                    // console.log(images)
               }   catch(err){
                    console.error("Error loading client image: ",err);
               }
          }
          importclientimages();

          // console.log(import("../assets/img/gallery/image1.jpg")) // Promise {<pending>}
     },[])

     


     // console.log(Object.keys(clientImages)); // (5) ['client1', 'client2, 'client3', 'client4', 'client5']
     // console.log(Object.entries(clientImages)); // (5) [Array(2), Array(2), Array(2), Array(2), Array(2)]
     if(Object.keys(clientImages).length === 0){
          return <div className="text-center py-5">Loading client images....</div>
     }

     return (
         <>
               {/* Start Client Section */}
               <section className="p-3">
                    <div className="container-fluid">
                         {/* start title */}
                         <div className="row text-center">
                              <div className="col-12">
                              <h3 className="titles">Satisfied Clients</h3>
                              <p className="small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                              </div>
                         </div>
                         {/* end title */}
                         <div className="row">
                              <div className="col-md-12">
                              <ul className="clientlists">
                                   
                                   {/* {
                                        Object.keys(clientImages).map((key,idx)=>(
                                             <li key={idx}><img src={ clientImages[key] } alt={key} /></li>
                                        ))
                                   } */}

                                   {
                                        Object.entries(clientImages).map(([key,src])=>(
                                             <li key={key}><img src={ src } alt={key} /></li>
                                        ))
                                   }

                                  
                              </ul>
                              </div>
                         </div>
                    </div>
               </section>
               {/* End Client Section */}
         </>
     )
};
export default Clients;



// -------------------------------------------
// *result 
// console.log(Object.entries(clientImages));
// (5) [Array(2), Array(2), Array(2), Array(2), Array(2)]
// 0: (2) ['client1', '/src/assets/img/clients/client1.png']
// 1: (2) ['client2', '/src/assets/img/clients/client2.png']
// 2: (2) ['client3', '/src/assets/img/clients/client3.png']
// 3: (2) ['client4', '/src/assets/img/clients/client4.png']
// 4: (2) ['client5', '/src/assets/img/clients/client5.png']
// length: 5
// [[Prototype]]: Array(0)