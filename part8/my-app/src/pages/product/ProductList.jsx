import React from "react";
import {useSearchParams,useLocation} from "react-router-dom";

function ProductList(){  
     // for single/multi query
         const [searchParams] = useSearchParams();
     //console.log(searchParams); // array type
     // console.log(searchParams.get('q')); 

     console.log(searchParams.get('keyword')); 
     console.log(searchParams.get('batch')); 
     console.log(searchParams.get('fee')); 

     // for multi concate search query result 
     // const location = useLocation();
     // console.log(location); // {pathname: '/product/', search: '?keyword=reactjs&batch=2&fee=4000', hash: '', state: null, key: 'wyrsui0k'}
     // console.log(location.search) // ?keyword=reactjs&batch=2&fee=4000
     
     
     return(
          <div>     
               <h1>Product List by query</h1>
               <p>Dynamic Routing and Route Query</p>
          </div>
     )
}

export default ProductList;