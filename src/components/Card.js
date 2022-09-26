import '../styles/card.css';
import React, { useState } from 'react';

const Card = (props) => {
	const [flipped, setFlipped] = useState(false);

	const handleClick = (e) => {
		setFlipped((prevState) => !prevState);
	}

	return (
		<div
			className={`card ${flipped ? 'flipped' : null}`} onClick={handleClick}>
			<div className='inner'>
				<div className='card-front'>Front</div>
				<div className='card-back'>Back</div>
			</div>
		</div>
	)
}

export default Card;
