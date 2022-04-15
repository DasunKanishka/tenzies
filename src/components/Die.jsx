const Die = ({ die, onClick }) => {
	return (
		<div className="col d-grid">
			<button
				className={`die shadow btn btn-outline-dark ${
					die.locked === true && 'active'
				}`}
				onClick={onClick}
			>
				{die.value}
			</button>
		</div>
	);
};

export default Die;
