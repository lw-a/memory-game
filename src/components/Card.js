import React, { useState } from 'react';
import '../styles/card.css';

const Card = (props) => {
	// const [flipped, setFlipped] = useState(false);

	const handleClick = (event) => {
      if (
        props.handleClick({
          id: props.id,
          element: event.target.parentElement.parentElement,
        })
      ) {
        event.target.parentElement.parentElement.classList.add('flipped');
      }
  	}

	return (
		<div
			className={`card`} onClick={handleClick}>
			<div className='inner'>
				<div className='card-front' style={{backgroundColor: props.colour}}>Front</div>
				<div className='card-back'>Back</div>
			</div>
		</div>
	)
}

export default Card;
