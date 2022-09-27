import React, { useState } from 'react';
import '../styles/card.css';

const Card = (props) => {
	const [flipped, setFlipped] = useState(false);

	const handleClick = (e) => {
    if (props.handleClick(props.id)) setFlipped((prevState) => !prevState);
	}

	return (
		<div
			className={`card ${flipped ? 'flipped' : null}`} onClick={handleClick}>
			<div className='inner'>
				<div className='card-front' style={{backgroundColor: props.colour}}>Front</div>
				<div className='card-back'>Back</div>
			</div>
		</div>
	)
}

export default Card;
