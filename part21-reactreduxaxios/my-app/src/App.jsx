import {BrowserRouter as Router,Routes,Route} from "react-router"
import './App.css'

import UserList from "./features/users/UsersList";
import AddUser from "./features/users/AddUser";
import EditUser from "./features/users/EditUser";

function App() {

  return (
    <section>
		<Router>
			<Routes>
				<Route path="/" element={<UserList/>} />
				<Route path="/add" element={<AddUser/>} />
				<Route path="/edit/:id" element={<EditUser/>} />
			</Routes>
		</Router>
    </section>
  )
}

export default App

// 29EU