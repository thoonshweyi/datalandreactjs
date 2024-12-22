import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter as Router} from 'react-router-dom';

import {Header,Footer} from "./components/index.js";
// import AllRoutes from "./routes/AllRoutes.jsx" // If you use default export
import {AllRoutes} from "./routes/AllRoutes.jsx" // If you use name export

// import mycomponent from "./pages/index.js"; 
// console.log(mycomponent); //Uncaught SyntaxError: The requested module '/src/pages/index.js' does not provide an export named 'default'

const member = 'true';


createRoot(document.getElementById('root')).render(
	<div>
		<section>
			<Router>

				{/* Header and Footer must be in Router */}
				<Header/>

				<AllRoutes member={member}/>

				<Footer/>
			</Router>
			
		</section>		
	</div>,
)
