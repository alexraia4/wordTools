import '../styles/reset.css'
import '../styles/App.css';
import { useState } from 'react'
import Row from './Row';

function App() {

  const [word, setWord] = useState('train'.split(''))
  const [guess, setGuess] = useState('')

  return (
    <div className="App">
      {word.map(char => <Row />)}
    </div>
  );
}

export default App;