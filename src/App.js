import Header from './components/Header';
import Card from './components/Card';
import uniqid from 'uniqid';
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

  const cardValues = ['green', 'yellow', 'purple']
  const cards = shuffle(cardValues).map((colour) => {
    const id = uniqid();
    return <Card colour={colour} key={id} id={id}/>
  })

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
