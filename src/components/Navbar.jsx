import logo from '../logo.svg';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
			<div className="container">
				<a
					href="/"
					className="d-flex align-items-center text-decoration-none"
				>
					<img
						src={logo}
						className="app-logo navbar-brand"
						alt="logo"
					/>

					<span className="app-link fs-1 fw-bolder">Tenzies</span>
				</a>

				<div id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" href="/">
								React Course - Game
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
