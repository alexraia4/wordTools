import '../styles/reset.css'
import '../styles/App.css';
import { useState, useEffect } from 'react'
import GameBoard from './GameBoard'
import Submission from './Submission'

function App() {

  const [word, setWord] = useState('train'.split(''))
  const [guesses, setGuesses] = useState(['*****', '*****', '*****', '*****', '*****', '*****'])
  const [step, setStep] = useState(0)

  console.log('APP GUESSES: ', guesses)

  return (
    <div className="App">
      <GameBoard guesses={guesses}/>
      <Submission guesses={guesses} setGuesses={setGuesses} step={step} setStep={setStep}/>
    </div>
  );
}

export default App;