import Header from './components/Header';
import Card from './components/Card';
import './styles/app.css';

function App() {

  let cardContent = [1, 2, 3, 4, 5, 6]

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

  return (
    <div className="App">
      <Header />
      <div className='game'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  );
}

export default App;
