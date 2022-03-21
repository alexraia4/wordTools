import '../styles/reset.css'
import '../styles/App.css';
import { useState } from 'react'
import GameBoard from './GameBoard'

function App() {

  const [word, setWord] = useState('penis'.toUpperCase())
  const [guesses] = useState(['*****', '*****', '*****', '*****', '*****', '*****'])
  const [step, setStep] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')

  const handleSubmit = () => {
    guesses[step] = currentGuess.toUpperCase()
    setStep(step + 1)
    if(currentGuess.toUpperCase() === word) {
      window.alert('you win :)')
    }
  }

  const handleEnterKey = (e) => {
    console.log('derp')
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div className="App">
      <GameBoard guesses={guesses} word={word}/>
        <div>
        <input type="text" maxLength="5" onChange={(e) => setCurrentGuess(e.target.value)}/>
        <div className='Submission_submit' onClick={handleSubmit}  value={currentGuess}>Submit</div>
      </div>
    </div>
  );
}

export default App;