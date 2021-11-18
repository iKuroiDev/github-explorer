import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import ReposList from '../../components/ReposList/ReposList';
import './UserInfo.css';

export default function UserInfo() {
	const { login } = useParams();
	const url = 'https://api.github.com/users/' + login;

	const { data: user, isPending, error } = useFetch(url);

	return (
		<div className='user'>
			{isPending && (
				<div className='text-center'>
					<div className='spinner-border text-primary' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</div>
				</div>
			)}
			{user && !error && !isPending && (
				<div>
					<div className='card shadow-sm'>
						<div className='row'>
							<div className='col-md-4'>
								<div className='p-4'>
									<img
										src={user.avatar_url}
										alt=''
										className='img-fluid rounded-circle shadow'
									/>
								</div>
							</div>
							<div className='col-md-8 card__info p-4 '>
								<div>
									<a
										href={user.html_url}
										target='_blank'
										rel='noreferrer'
									>
										<h2 className='fw-bold'>{user.name}</h2>
									</a>
									<h5 className='fst-italic text-muted'>
										{user.login}
									</h5>
									<p>Location: {user.location}</p>
								</div>
								<div className='card__badges'>
									<span className='badge rounded-pill bg-light text-primary border border-2 border-primary'>
										<i className='bi bi-people'></i> Followers: &nbsp;
										{user.followers}
									</span>
									<span className='badge rounded-pill bg-light text-primary border border-2 border-primary'>
										<i className='bi bi-journals'></i> Public repos:
										&nbsp;
										{user.public_repos}
									</span>
								</div>
							</div>
						</div>
					</div>

					<div>
						<ReposList user={user.login} />
					</div>
				</div>
			)}

			{error === '404' && (
				<div className='row'>
					<div className='col-md-6 d-flex align-items-center'>
						<div className='not-found text-center'>
							<h2 className='fw-bold text-muted'>
								Opa! Não há resultados para sua pesquisa...
							</h2>
							<p className='text-muted'>
								Tente pesquisar outro usuário.
							</p>
						</div>
					</div>
					<div className='col-md-6'>
						<img
							src='https://octodex.github.com/images/inspectocat.jpg'
							alt='Inspectocat'
							className='img-fluid'
						/>
					</div>
				</div>
			)}
		</div>
	);
}
