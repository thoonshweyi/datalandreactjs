import { Fragment, StrictMode } from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router";
import { createRoot } from 'react-dom/client'
import './App.css'
import './mystyle.css'
import Banner from './components/Banner.jsx'
import AllPosts from './components/AllPosts.jsx'
import Home from "./components/Home.jsx"
import PostDetail from "./components/PostDetail.jsx"


createRoot(document.getElementById('root')).render(
    <Fragment>
        <Router>
            <header>
                <Banner />
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/posts">Posts</Link></li>
                    </ul>
                </nav>
            </header>

            <div>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/posts' element={<AllPosts/>}/>
                    <Route path='/posts/:posturl' element={<PostDetail/>}/>
                </Routes>
            </div>

        </Router>
        
    </Fragment>,
)
