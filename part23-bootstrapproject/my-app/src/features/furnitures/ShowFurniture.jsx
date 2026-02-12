import {useNavigate, useParams} from "react-router"
import {useSelector,useDispatch} from "react-redux";


export default function ShowFurniture(){
     const {id} = useParams();
     const currentfurniture = useSelector((state)=> state.furnitures.datas.find((data) => data.id == parseInt(id)))
     console.log(currentfurniture);
     return (
          <>
          {/* Product Detail Section */}
          <div className="container py-5">
               <div className="row g-5">
                    {/* Product Image */}
                    <div className="col-md-6">
                         <div className="product-img">
                         <img src={currentfurniture.thumbnail || currentfurniture.images?.[0]}  className="img-fluid" alt="Product" style={{width:"100%",height:"400px",objectFit:"contain"}}/>
                         </div>
                    </div>

                    {/* Product Info */}
                    <div className="col-md-6">
                         <h2 className="fw-bold">Awesome Product Name</h2>
                         <p className="text-muted">Category: Electronics</p>

                         {/* Rating */}
                         <div className="rating mb-3">
                         <i className="bi bi-star-fill"></i>
                         <i className="bi bi-star-fill"></i>
                         <i className="bi bi-star-fill"></i>
                         <i className="bi bi-star-half"></i>
                         <i className="bi bi-star"></i>
                         <span className="ms-2">(120 Reviews)</span>
                         </div>

                         {/* Price */}
                         <div className="mb-3">
                         <span className="price">$299.00</span>
                         <span className="old-price">$399.00</span>
                         </div>

                         {/* Description */}
                         <p>
                         This is a short description of the product. It highlights the key features,
                         specifications, and why customers should love this product. Perfect htmlFor tech lovers 
                         and everyday use.
                         </p>

                         {/* Options */}
                         <div className="mb-3">
                         <label htmlFor="size" className="htmlForm-label">Choose Size:</label>
                         <select id="size" className="htmlForm-select w-50">
                              <option>Small</option>
                              <option>Medium</option>
                              <option>Large</option>
                         </select>
                         </div>

                         <div className="mb-3">
                         <label htmlFor="quantity" className="htmlForm-label">Quantity:</label>
                         <input type="number" id="quantity" className="htmlForm-control w-25" value="1" min="1" />
                         </div>

                         {/* Buttons */}
                         <div className="d-flex gap-3">
                         <button className="btn btn-buy px-4">Buy Now</button>
                         <button className="btn btn-outline-dark px-4">Add to Cart</button>
                         </div>
                    </div>
               </div>
          
          </div>

          </>
     )
}
     //    <img src="https://via.placeholder.com/600x400" class="img-fluid" alt="Product">
