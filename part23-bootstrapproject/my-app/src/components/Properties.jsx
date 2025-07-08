import React,{useState} from "react";


// import all  images 
import image1 from "./../assets/img/gallery/image1.jpg"
import image2 from "./../assets/img/gallery/image2.jpg"
import image3 from "./../assets/img/gallery/image3.jpg"
import image4 from "./../assets/img/gallery/image4.jpg"
import image5 from "./../assets/img/gallery/image5.jpg"
import image6 from "./../assets/img/gallery/image6.jpg"
import image7 from "./../assets/img/gallery/image7.jpg"
import image8 from "./../assets/img/gallery/image8.jpg"
import image9 from "./../assets/img/gallery/image9.jpg"


const Properties = ()=>{
     const properties = [
          {id:1,image:image1,category:"house",title:"Modern House"},
          {id:2,image:image2,category:"house",title:"Country House"},
          {id:3,image:image3,category:"house",title:"Modern House"},
          {id:4,image:image4,category:"decoration",title:"Living Room"},
          {id:5,image:image5,category:"decoration",title:"Bedroom"},
          {id:6,image:image6,category:"decoration",title:"Kitchen"},
          {id:7,image:image7,category:"furniture",title:"Sofa Set"},
          {id:8,image:image8,category:"furniture",title:"Dining Table"},
          {id:9,image:image9,category:"furniture",title:"Bed Frame"},
          {id:10,image:image1,category:"office",title:"Workspace"},
          {id:11,image:image2,category:"office",title:"Conference Roo"},
          {id:12,image:image3,category:"office",title:"Executive Office"},
          {id:13,image:image4,category:"decoration",title:"Bedroom"},
          {id:13,image:image5,category:"decoration",title:"Living room"},
          {id:14,image:image6,category:"furniture",title:"Country House"},
          {id:15,image:image7,category:"furniture",title:"Bed Frame"}
     ];

     const [activeFilter, setActiveFilter] =useState("all");

     // Filter properties based on active or filter category
     const filterproperties = activeFilter === "all" ? properties : properties.filter(property => property.category === activeFilter);

     return (
          <>
          {/* Start Property Section */}
          <section id="properties" className="py-5">
               <div className="container-fluid">
                    {/* start title */}
                    <div className="row text-center">
                         <div className="col-12">
                         <h3 className="titles">Properties</h3>
                         </div>
                    </div>
                    {/* end title */}

                    <ul className="list-inline text-center text-uppercase fw-bold">
                         <li className="list-inline-item propertylists activeitems" data-filter="all">All <span className="text-muted mx-md-5 mx-3">/</span></li>
                         <li className="list-inline-item propertylists" data-filter="house">House <span  className="text-muted mx-md-5 mx-3">/</span></li>
                         <li className="list-inline-item propertylists" data-filter="decoration">Decoration <span className="text-muted mx-md-5 mx-3">/</span></li>
                         <li className="list-inline-item propertylists" data-filter="furniture">Furniture <span className="text-muted mx-md-5 mx-3">/</span></li>
                         <li className="list-inline-item propertylists" data-filter="office">Office</li>
                    </ul>

                    <div className="container-fluid">
                                             
                         <div className="d-flex flex-wrap justify-content-center">
                              <div className="filters house"><a href={image1} data-lightbox="property" data-title="image1"><img src={image1} width="200px" alt="image1"/></a></div>
                              <div className="filters house"><a href={image2} data-lightbox="property" data-title="image2"><img src={image2} width="200px" alt="image2"/></a></div>
                              <div className="filters house"><a href={image3} data-lightbox="property" data-title="image3"><img src={image3} width="200px" alt="image3"/></a></div>
                              <div className="filters decoration"><a href={image4} data-lightbox="property" data-title="image4"><img src={image4} width="200px" alt="image4"/></a></div>
                              <div className="filters decoration"><a href={image5} data-lightbox="property" data-title="image5"><img src={image5} width="200px" alt="image5"/></a></div>
                              <div className="filters decoration"><a href={image6} data-lightbox="property" data-title="image6"><img src={image6} width="200px" alt="image6"/></a></div>
                              <div className="filters decoration"><a href={image7} data-lightbox="property" data-title="image7"><img src={image7} width="200px" alt="image7"/></a></div>
                              <div className="filters furniture"><a href={image8} data-lightbox="property" data-title="image8"><img src={image8} width="200px" alt="image8"/></a></div>
                              <div className="filters furniture"><a href={image9} data-lightbox="property" data-title="image9"><img src={image9} width="200px" alt="image9"/></a></div>
                              <div className="filters furniture"><a href={image1} data-lightbox="property" data-title="image1"><img src={image1} width="200px" alt="image1"/></a></div>
                              <div className="filters office"><a href={image2} data-lightbox="property" data-title="image2"><img src={image2} width="200px" alt="image2"/></a></div>
                              <div className="filters office"><a href={image3} data-lightbox="property" data-title="image3"><img src={image3} width="200px" alt="image3"/></a></div>
                              <div className="filters decoration"><a href={image4} data-lightbox="property" data-title="image4"><img src={image4} width="200px" alt="image4"/></a></div>
                              <div className="filters decoration"><a href={image5} data-lightbox="property" data-title="image5"><img src={image5} width="200px" alt="image5"/></a></div>
                              <div className="filters furniture"><a href={image6} data-lightbox="property" data-title="image6"><img src={image6} width="200px" alt="image6"/></a></div>
                              <div className="filters furniture"><a href={image7} data-lightbox="property" data-title="image7"><img src={image7} width="200px" alt="image7"/></a></div>
                         </div>
                    
                    </div>

               </div>
          </section>
          {/* End Property Section */}
          </>
     )
};
export default Properties;