import { useEffect, useState } from 'react';
import Die from './Die';

const Screen = () => {
	const newDice = () => {
		const min = 1;
		const max = 6;

		const newDice = Array.from({ length: 10 }, () => ({
			value: Math.floor(Math.random() * (max - min + 1) + min),
			locked: false,
		}));

		return newDice;
	};

	const [dice, setDice] = useState(newDice());
	const [tenzies, setTenzies] = useState(false);

	const handleRoll = () => {
		const min = 1;
		const max = 6;

		setDice(prevDice =>
			prevDice.map(preDie =>
				preDie.locked
					? preDie
					: {
							...preDie,
							value: Math.floor(
								Math.random() * (max - min + 1) + min
							),
					  }
			)
		);
	};

	const handleLock = index => {
		setDice(prevDice =>
			prevDice.map((preDie, preIndex) =>
				preIndex === index
					? { ...preDie, locked: !preDie.locked }
					: preDie
			)
		);
	};

	const handleWin = () => {
		const allLocked = dice.every(die => die.locked);
		const allValue = dice.every(die => die.value === dice[0].value);

		allLocked && allValue && setTenzies(true);

		allLocked && allValue && console.log('You Won!!!');
	};

	useEffect(handleWin, [dice]);

	return (
		<div className="container">
			<h1 className="text-center my-5">Tenzies</h1>

			<p className="text-center">
				Roll until all dice are the same. Click each die to freeze it at
				its current value between rolls.
			</p>

			<div className="dice-container row row-cols-5 g-5 mb-5">
				{dice.map((die, index) => (
					<Die
						key={index}
						die={die}
						onClick={() => handleLock(index)}
					/>
				))}
			</div>

			<div className="d-grid mb-5">
				<button
					onClick={handleRoll}
					className="btn btn-lg btn-success"
					disabled={tenzies}
				>
					{!tenzies ? 'Roll' : 'New Game'}
				</button>
			</div>
		</div>
	);
};

export default Screen;
