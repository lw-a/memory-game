import '../styles/header.css';

const Header = (props) => {
  return(
    <header>
      <h1>Concentration</h1>
      <div className='scores'>
        <p>Moves: {props.moves}</p>
        <p>Best Score: {props.top}</p>
      </div>
      <p className='note'>(Lower is better!)</p>
    </header>
  )
}

export default Header;
