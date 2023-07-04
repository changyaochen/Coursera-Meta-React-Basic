import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = () => {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number');
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }

  return (
    <div className="App">
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
