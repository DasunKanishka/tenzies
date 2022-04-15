const Footer = () => {
	return (
		<footer className="bg-dark py-2">
			<div className="container fst-italic text-light text-end">
				&copy; {new Date().getFullYear()} React Tenzies. All rights
				reserved
			</div>
		</footer>
	);
};

export default Footer;
