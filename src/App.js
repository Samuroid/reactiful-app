import logo from './logo.svg';
import './App.css';
import Answers from './components/FindAnswers.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Answers />

      </header>
    </div>
  );
}

export default App;
