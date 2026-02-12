// import React from "react";
// import {useParams} from "react-router-dom";

// function ProductDetail(){
//      // 'id' should match the route param name
//      const {name,id} = useParams(); // {name: 'redbull', id: '1001'}
//      console.log(name);
//      console.log(id);  
//      return(
//           <div>     
//                <h1>Product Detail</h1>
//                <p>Dynamic Routing and Route Multi Parameter</p>
//                <p>Route passing data Product Name is {name}</p>
//                <p>Route passing data Product ID is {id}</p> 
//           </div>
//      )
// }

// export default ProductDetail;


// import React from "react";
// import {useParams} from "react-router-dom";

// function ProductDetail(){
//      // 'id' should match the route param name
//      const param = useParams(); // {name: 'redbull', id: '1001'}
//      console.log(param);
//      return(
//           <div>     
//                <h1>Product Detail</h1>
//                <p>Dynamic Routing and Route Multi Parameter</p>
//                <p>Route passing data Product Name is {param.name}</p>
//                <p>Route passing data Product ID is {param.id}</p> 
//           </div>
//      )
// }

// export default ProductDetail;


import React from "react";
import {useParams} from "react-router-dom";

function ProductShow({name,id}){
     console.log('Name = ',name);
     console.log('Id = ',id);
     return(
          <div>
               <h1>Product Detail</h1>
               <p>Dynamic Routing and Route Multi Parameter</p>
               <p>Route passing data Product Name is {name}</p>
               <p>Route passing data Product ID is {id}</p> 
          </div>
     )
}

function ProductDetail(props){
     // 'id' should match the route param name
     const {name,id} = useParams(); // {name: 'redbull', id: '1001'}
     // console.log(param);
     return <ProductShow name={name} id={id}/>
}

export default ProductDetail;