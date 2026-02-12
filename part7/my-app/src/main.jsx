import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {BrowserRouter as Router,Routes,Route,Link,Navigate} from "react-router-dom"
import './index.css'
import App from './App.jsx'

import Home from "./component/Home.jsx";
import Contact from "./component/Contact.jsx";
import About from "./component/About.jsx";
import Product from "./component/Product.jsx";
import NewsLetter from "./component/NewsLetter.jsx";
import Donate from "./component/Donate.jsx";

import ProductDetail from "./component/ProductDetail.jsx";
import ProductList from "./component/ProductList.jsx";
import PageNotFound from "./component/PageNotFound.jsx";

import Language from "./component/Language.jsx";
import LanguageEn from "./component/LanguageEn.jsx";
import LanguageTh from "./component/LanguageTh.jsx";
import LanguageSri from "./component/LanguageSri.jsx";
import LanguageNone from "./component/LanguageNone.jsx";


const member = false; // true
createRoot(document.getElementById('root')).render(
	<div>
		<Router>
			<nav>
				<ul>
					<li><Link to={'/home'}>Home</Link></li>
					<li><Link to={'/contact'}>Contact</Link></li>
					<li><Link to={'/about'}>About</Link></li>
					<li><Link to={'/product/1001'}>Product</Link></li>
				
					<li><Link to={'/newsletter'}>NewsLetter</Link></li>
					<li><Link to={'/donate'}>Donate</Link></li>
				
					<li><Link to={'/product/redbull/1001'}>Product Detail</Link></li>
					
					<li><Link to={'/product/?q=reactjs'}>Product List by query</Link></li>
					<li><Link to={'/product/?keyword=reactjs&batch=2&fee=4000'}>Product List by multi query</Link></li>


					<li><Link to={'/language'}>Language</Link></li>
					<li><Link to={'/language/en'}>Language English</Link></li>
					<li><Link to={'/language/th'}>Language Thailand</Link></li>
					<li><Link to={'/language/sri'}>Language Srilanka</Link></li>


				</ul>
			</nav>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />

				{/* Dynamic Routing and Route Single Parameter */}
				<Route path="/product/:id" element={<Product />} />

				{/* Navigation */}
				<Route path="/newsletter" element={<NewsLetter />}></Route>
				{/* <Route path="/donate" element={<Navigate to='/home'/>}></Route> */}
				<Route path="/donate" element={ member ?  <Donate /> : <Navigate to="/home"/> }></Route>

				{/* Dynamic Routing and Route Multi Parameter */}
				<Route path="/product/:name/:id" element={<ProductDetail />} />
				
				
				<Route path="/product" element={<ProductList />} />
			
				{/* <Route path="*" element={<PageNotFound />} /> */} {/* http://localhost:5173/product/redbull/1001/2000 */}
				
				<Route path="*" element={<PageNotFound title="404"/>} />


				{/* Nested Routes */}
				{/* <Route path='/language' element={<Language/>}></Route>
				<Route path='/language/en' element={<LanguageEn/>}></Route>
				<Route path='/language/th' element={<LanguageTh/>}></Route>
				<Route path='/language/sri' element={<LanguageSri/>}></Route> */}


				<Route path="/language" element={<Language/>}>
					<Route path='en' element={<LanguageEn/>} />
					<Route path='th' element={<LanguageTh/>} />
					<Route path='sri' element={<LanguageSri/>} />
					<Route path='*' element={<LanguageNone/>} />
				</Route>
			</Routes>
		</Router>
	</div>,
)
// 11NR