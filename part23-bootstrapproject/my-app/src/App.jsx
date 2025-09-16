import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router";

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'


import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PropertyPage from './pages/PropertyPage.jsx'
import ServicePage from './pages/ServicePage'
import CustomerPage from './pages/CustomerPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ShowFurniture from "./features/furnitures/ShowFurniture.jsx";

import FurniturePage from './pages/FurniturePage.jsx';
import FurnitureDetalilPage from './pages/FurnitureDetailPage.jsx';
import CartPage from './pages/CartPage.jsx';


function App() {
	return (
		<div className="App">
		<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/aboutus" element={<AboutPage />}/>
				<Route path="/properties" element={<PropertyPage />} />
				<Route path="/services" element={<ServicePage />} />
				<Route path="/customers" element={<CustomerPage />} />
				<Route path="/contacts" element={<ContactPage />}/>

				<Route path="/furnitures" element={<FurniturePage />} />
				{/* <Route path="/furnitures/:id" element={<ShowFurniture />} /> */}
				<Route path="/furnitures/:id" element={<FurnitureDetalilPage />} />
				<Route path="/carts" element={<CartPage />} />

			</Routes>
		<Footer />
		</div>
	)
}

export default App