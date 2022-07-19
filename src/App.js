import './App.css';
import Developer from './components/Developer';

const devs = [
  {
    name: 'Alex',
    age: 29,
    country: 'Brasil',
  },
  {
    name: 'Hyaguinhogp',
    age: 19,
    country: 'Brasil',
  },
  {
    name: 'Chris Bumsted',
    age: 27,
    country: 'EUA',
  },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className='developers-list'>
          {
            devs.map((element, index) => <Developer key={index} name={element.name} age={element.age} country={element.country} />)
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
