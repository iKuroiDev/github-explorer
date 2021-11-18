import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';

export default function ReposList({ user }) {
	// const [userData, setUserData] = useState(user);
	const [url, setUrl] = useState(`https://api.github.com/users/${user}/repos`);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [tab, setTab] = useState('repos');

	useEffect(() => {
		setIsSubmitting(true);
		setUrl(`https://api.github.com/users/${user}/${tab}`);
	}, [user, tab]);

	const { data: repos, isPending, error } = useFetch(url, isSubmitting);

	const handleClick = (t) => {
		setTab(t);
		setIsSubmitting(true);
		setUrl(`https://api.github.com/users/${user}/${tab}`);
	};

	return (
		<div className='repos'>
			<div className='row'>
				<div className='col-12'>
					<ul
						className='nav justify-content-center'
						role='tablist'
						id='nav-tab'
					>
						<li className='nav-item' role='presentation'>
							<button
								className='nav-link active'
								aria-current='page'
								id='nav-repo-tab'
								data-bs-toggle='pill'
								onClick={() => handleClick('repos')}
							>
								Repos
							</button>
						</li>
						<li className='nav-item' role='presentation'>
							<button
								className='nav-link'
								aria-current='page'
								id='nav-starred-tab'
								data-bs-toggle='pill'
								onClick={() => handleClick('starred')}
							>
								Starred
							</button>
						</li>
					</ul>
				</div>
			</div>

			<div className='row'>
				<div className='col-12'>
					{isPending && (
						<div className='text-center'>
							<div className='spinner-border text-primary' role='status'>
								<span className='visually-hidden'>Loading...</span>
							</div>
						</div>
					)}

					{repos && repos.length === 0 && !isPending && (
						<h3 className='text-muted fw-bold text-center'>
							Oops! Nada pra ver aqui.
						</h3>
					)}

					{error && (
						<h3 className='text-muted fw-bold text-center'>
							Oops! Algo deu errado, tente novamente!
						</h3>
					)}
					{repos &&
						!isPending &&
						repos.map((repo) => (
							<div className='card shadow-sm p-3 mb-3' key={repo.id}>
								<a
									href={repo.html_url}
									target='_blank'
									className='fw-bold'
									rel='noreferrer'
								>
									{repo.name}
								</a>
								<p>{repo.description}</p>
								<div className='card__badges'>
									{repo.language && (
										<span className='badge rounded-pill bg-light text-primary border border-2 border-primary'>
											<i className='bi bi-code'></i> Language:&nbsp;
											{repo.language}
										</span>
									)}
									<span className='badge rounded-pill bg-light text-primary border border-2 border-primary'>
										<i className='bi bi-star'></i> Stars:&nbsp;
										{repo.stargazers_count}
									</span>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}
