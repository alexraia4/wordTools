import '../styles/reset.css'
import '../styles/App.css';
import { useState, useEffect } from 'react'
import GameBoard from './GameBoard'

function App() {

  const [word, setWord] = useState('train'.split(''))
  const [guesses] = useState(['*****', '*****', '*****', '*****', '*****', '*****'])
  const [step, setStep] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')

  console.log(step)

  const handleSubmit = () => {
    guesses[step] = currentGuess
    setStep(step + 1)
  }

  return (
    <div className="App">
      <GameBoard guesses={guesses}/>
        <div>
        <input type="text" maxlength="5" onChange={(e) => setCurrentGuess(e.target.value)}/>
        <div className='Submission_submit' onClick={handleSubmit}>Submit</div>
      </div>
    </div>
  );
}

export default App;