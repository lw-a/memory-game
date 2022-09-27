import Header from './components/Header';
import Card from './components/Card';
import uniqid from 'uniqid';
import { useRef } from 'react';
import './styles/app.css';

function App() {


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
		if (!pair.current.cardOne) {
			pair.current.cardOne = card
			return true
		} else if (!pair.current.cardTwo) {
			pair.current.cardTwo = card
      if (pair.current.cardOne.colour === pair.current.cardTwo.colour) {
				pair.current.cardOne = null;
				pair.current.cardTwo = null;
			} else {
        setTimeout(() => {
          pair.current.cardOne.element.classList.remove('flipped')
          pair.current.cardTwo.element.classList.remove('flipped')
          pair.current.cardOne = null;
          pair.current.cardTwo = null;
        }, 1000)
      }
			return true
		}
		return false
	}

  const cardValues = ['green', 'yellow', 'purple', 'orange', 'pink', 'grey']
  const cards = shuffle(cardValues).map((colour) => {
    const id = uniqid();
    return <Card colour={colour} key={id} id={id} handleClick={handleClick}/>
  })

  const pair = useRef({ cardOne: null, cardTwo: null })



  return (
    <div className="App">
      <Header />
      <div className='game'>
        {cards}
      </div>
    </div>
  );
}

export default App;
