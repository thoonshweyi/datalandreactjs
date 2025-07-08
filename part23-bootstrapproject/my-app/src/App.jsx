import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router";

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'


import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PropertyPage from './pages/PropertyPage.jsx'
import ServicePage from './pages/ServicePage'
import CustomerPage from './pages/CustomerPage.jsx';
import FurniturePage from './pages/FurniturePage.jsx';
import ContactPage from './pages/ContactPage.jsx';


function App() {
	return (
		<div className="App">
		<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/abouts" element={<AboutPage />}/>
				<Route path="/properties" element={<PropertyPage />} />
				<Route path="/services" element={<ServicePage />} />
				<Route path="/customers" element={<CustomerPage />} />
				<Route path="/furnitures" element={<FurniturePage />} />
				<Route path="/contacts" element={<ContactPage />}/>
			</Routes>
		<Footer />
		</div>
	)
}

export default App