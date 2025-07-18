import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router";
import './libs/fontawesome.js'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

// import 'lightbox2/dist/css/lightbox.min.css'
// import 'lightbox2/dist/js/lightbox.min.js'

import './assets/css/style.css';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <div>
			<Router>
        <App />
			</Router>
  </div>,
)
