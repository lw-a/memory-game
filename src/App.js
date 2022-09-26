import Header from './components/Header';
import Card from './components/Card';
import './styles/app.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='game'>
      <Card />
      <Card />
      </div>
    </div>
  );
}

export default App;
