import { useState } from 'react';
import { useNavigate } from 'react-router';
import logo from '../../img/logo.png';

export default function SearchForm() {
	const [url, setUrl] = useState(null);
	const [search, setSearch] = useState('');

	let navigate = useNavigate();

	const handleSearch = (e) => {
		e.preventDefault();
		navigate(`/${search}`);

		setUrl(`https://api.github.com/users/${search}`);
	};
	return (
		<div>
			<header>
				<div className='logo text-center p-4'>
					<img src={logo} alt='Github Explorer' className='img-fluid' />
				</div>
			</header>
			<div className='search'>
				<form className='form-inline' onSubmit={handleSearch}>
					<div className='form-floating'>
						<input
							type='search'
							className='form-control sr-only'
							id='floatingInput'
							placeholder='Pesquisar usuário'
							onChange={(e) => setSearch(e.target.value)}
						/>
						<label htmlFor='floatingInput'>Pesquisar usuário</label>
					</div>
					<button className=' btn btn-primary'>Pesquisar</button>
				</form>
			</div>
		</div>
	);
}
