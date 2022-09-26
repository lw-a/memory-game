import '../styles/header.css';

const Header = () => {
  return(
  <header>
      <h1>Concentration</h1>
      <div className='scores'>
        <p>Moves: 0</p>
        <p>Best Score: 0</p>
      </div>
    <p className='note'>(Lower is better!)</p>
  </header>
  )
}

export default Header;
