import {BrowserRouter as Router,Routes,Route} from "react-router"
import './App.css'

import TotoList from "./features/todos/TotosList";
import AddToto from "./features/todos/AddToto";
import EditToto from "./features/todos/EditToto";
import DeleteToto from "./features/todos/DeleteToto";

function App() {

  return (
    <section>
		<Router>
			<Routes>
				<Route path="/" element={<TotoList/>} />
				<Route path="/add" element={<AddToto/>} />
				<Route path="/edit/:id" element={<EditToto/>} />
				<Route path="/delete/:id" element={<DeleteToto/>} />
			</Routes>
		</Router>
    </section>
  )
}

export default App

// 29EU