import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';
import Players from './Components/Players/Players';

import { Routes, Route, Link } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<header className="app-header">
				<Link to="/">
					<h1 className="homeButton">Home</h1>
				</Link>
				<Link to="/players">
					<h1 className="players">Players</h1>
				</Link>
			</header>

			{/* Routes - Do I need a div? */}
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/players" element={<Players />} />
			</Routes>
		</div>
	);
}

export default App;
