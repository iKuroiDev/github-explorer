export default function Home() {
	return (
		<div className='row'>
			<div className='col-md-6'>
				<div className='p-3'>
					<img
						src='https://octodex.github.com/images/NUX_Octodex.gif'
						alt='NUXtocat'
						className='img-fluid'
					/>
				</div>
			</div>

			<div className='col-md-6 d-flex align-items-center p-3'>
				<h2 className='fw-bold text-center text-muted'>
					Pesquise um nome de usuário no campo acima!
				</h2>
			</div>
		</div>
	);
}
