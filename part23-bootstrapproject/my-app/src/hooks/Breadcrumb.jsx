// import {Link,useLocation} from "react-router";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import {faHome } from "@fortawesome/free-solid-svg-icons"
 
// const Breadcrumb = ()=>{
//      const location = useLocation();

//      const pathnames = location.pathname.split("/").filter(value=>value); // remove empty 

//      // console.log("Location =",location);
//      // console.log("Pathnames =",pathnames);

//      return (
//           <nav className="bg-dark pt-3">
//                <ol className="container breadcrumb mb-0 text-white breadcrumb-darks">
//                     <li className="breadcrumb-item ">
//                          <Link to="/" className="text-white text-decoration-none">
//                          <FontAwesomeIcon icon={faHome} className="me-2"/>Home
//                          </Link>
//                     </li>

//                     {
//                          pathnames.map((value,idx)=>{
//                               const to = '/'+pathnames.slice(0,idx + 1).join('/'); // /contact/   
//                               const isLast = idx  === pathnames.length - 1; // 0, 1-1 == 0 = true // 1 === 2 - === 1 = true 

//                               return isLast ? (
//                                    <li key={idx} className="breadcrumb-item text-white active">
//                                       {value.replace('-','')}
//                                    </li>
//                               ):
//                               (
//                                    <li key={idx} className="breadcrumb-item ">
//                                         <Link to={to} className="text-white text-decoration-none">
//                                              {value.replace('-','')}
//                                         </Link>
//                                    </li>
//                               )
//                          })
//                     }
//                </ol>
//           </nav>
//      )
// }

// export default Breadcrumb;




import {Link,useLocation} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHome } from "@fortawesome/free-solid-svg-icons"
 
const Breadcrumb = ()=>{
     const location = useLocation();

     const pathnames = location.pathname.split("/").filter(value=>value); // remove empty 

     // console.log("Location =",location);
     // console.log("Pathnames =",pathnames);

     const routeNameMaps = {
          aboutus: "About Us",
          properties: "Our Properties",
          services: "Services",
          customers: "VIP Customers",
          furnitures: "Furnnitures",
          carts: "Shopping Cart",
          checkout: "Checkout",
          "order-success": "Order Success",
          contactus: "Cotact Us",
     };

     return (
          <nav className="bg-dark pt-3">
               <ol className="container breadcrumb mb-0 text-white breadcrumb-darks">
                    <li className="breadcrumb-item ">
                         <Link to="/" className="text-white text-decoration-none">
                         <FontAwesomeIcon icon={faHome} className="me-2"/>Home
                         </Link>
                    </li>

                    {
                         pathnames.map((value,idx)=>{
                              const to = '/'+pathnames.slice(0,idx + 1).join('/'); // /contact/   
                              const isLast = idx  === pathnames.length - 1; // 0, 1-1 == 0 = true // 1 === 2 - === 1 = true 
                              const label = routeNameMaps[value] || value.replace('-','');

                              return isLast ? (
                                   <li key={idx} className="breadcrumb-item text-white active">
                                      {label}
                                   </li>
                              ):
                              (
                                   <li key={idx} className="breadcrumb-item ">
                                        <Link to={to} className="text-white text-decoration-none">
                                             {label}
                                        </Link>
                                   </li>
                              )
                         })
                    }
               </ol>
          </nav>
     )
}

export default Breadcrumb;