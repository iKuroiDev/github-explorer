import './App.css';
import UserInfo from './pages/UserInfo/UserInfo';

import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchForm from './components/SearchForm/SearchForm';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<div className='container'>
				<SearchForm />
				<div className='content'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/:login' element={<UserInfo />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
