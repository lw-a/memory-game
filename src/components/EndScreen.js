
const EndScreen = (props) => {
  return (
    <div className='gameOver'>
    <p>Congrats, you beat the game in {props.moves} moves!</p>
    <button className='resetbtn' onClick={() => {
        props.playAgain((prevState) => !prevState)
      }}>
      Play Again
    </button>
    </div>
  )
}

export default EndScreen;
