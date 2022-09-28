import Header from './Components/Header';
import Card from './Components/Card';
import EndScreen from './Components/EndScreen';
import uniqid from 'uniqid';
import { useRef, useState, useEffect } from 'react';
import './styles/app.css';

function App() {

  const [moves, setMoves] = useState(0)
  const [cards, setCards] = useState([])
  const [bestScore, setBestScore] = useState(0)
  let [playAgain, setPlayAgain] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setCards(() => {
      const array = shuffle(cardValues).map((colour) => {
        const id = uniqid();
        return <Card colour={colour} key={id} id={id} handleClick={handleClick}/>
      })
      if (moves < bestScore || bestScore === 0) setBestScore(moves)
      setMoves(0)
      setGameOver(false)
      return array
    })
  }, [playAgain])

  function shuffle(array) {

    let doubled = [];

    array.forEach((item) => {
      for (let i = 0; i < 2; i++) {
        doubled.push(item);
      }
    });

    const shuffled = [];

    let length = doubled.length;
    while (length) {
      let i = Math.floor(Math.random() * doubled.length);
      if (i in doubled) {
        shuffled.push(doubled[i]);
        delete doubled[i];
        length--;
      }
    }
    return shuffled;
  }

	const handleClick = (card) => {
    if (card.element.classList.value === 'card') {
      if (!pair.current.cardOne) {
        pair.current.cardOne = card

        return true
      } else if (!pair.current.cardTwo) {
        pair.current.cardTwo = card

        if (pair.current.cardOne.colour === pair.current.cardTwo.colour && pair.current.cardOne.id !== pair.current.cardTwo.id) {
          pair.current.cardOne = null;
          pair.current.cardTwo = null;
          pair.current.sets += 1
          if (pair.current.sets === cardValues.length) {
						setGameOver(true)
            pair.current.sets = 0
          }
        } else {
          setTimeout(() => {
            pair.current.cardOne.element.classList.remove('flipped')
            pair.current.cardTwo.element.classList.remove('flipped')
            pair.current.cardOne = null;
            pair.current.cardTwo = null;
          }, 1000)
        }
        setMoves((moves) => moves + 1)
        return true
      }
    }
		return false
	}

  const cardValues = ['green', 'yellow', 'purple', 'orange', 'pink', 'grey']

  const pair = useRef({ cardOne: null, cardTwo: null, sets: 0 })

  let endScreen = gameOver ? <EndScreen moves={moves} playAgain={setPlayAgain}/> : null

  return (
    <div className="App">
      <Header moves={moves} top={bestScore}/>
      {endScreen}
      <div className='game'>{cards}</div>
    </div>
  );
}

export default App;
