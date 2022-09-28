import '../styles/card.css';

const Card = (props) => {

	const handleClick = (event) => {
      if (
        props.handleClick({
          id: props.id,
          colour: props.colour,
          element: event.target.parentElement.parentElement,
        })
      ) {
        event.target.parentElement.parentElement.classList.add('flipped');
      }
  	}

	return (
		<div
			className='card' onClick={handleClick}>
			<div className='inner'>
				<div className='card-front' style={{backgroundColor: props.colour}}></div>
				<div className='card-back'>♥️</div>
			</div>
		</div>
	)
}

export default Card;
