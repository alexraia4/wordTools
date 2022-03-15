import '../styles/reset.css'
import '../styles/App.css';
import { useState } from 'react'
import GameBoard from './GameBoard'
import Submission from './Submission'

function App() {

  const [word, setWord] = useState('train'.split(''))
  const [guess, setGuess] = useState('')

  return (
    <div className="App">
      <GameBoard />
      <Submission />
    </div>
  );
}

export default App;