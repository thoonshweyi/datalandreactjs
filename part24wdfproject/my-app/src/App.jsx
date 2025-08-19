import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router";

import HomePage from './pages/HomePage'
import ClientPage from './pages/ClientPage'
import AboutPage from './pages/AboutPage'
import PricingPage from './pages/PricingPage'
import ContactPage from './pages/ContactPage'
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clients" element={<ClientPage />} />
        <Route path="/abouts" element={<AboutPage />} />
        <Route path="/pricings" element={<PricingPage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
