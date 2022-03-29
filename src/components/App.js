import '../styles/reset.css'
import '../styles/App.css';
import { useState, useEffect } from 'react'
import GameBoard from './GameBoard'
import axios from 'axios'

function App() {

  const [word, setWord] = useState('')
  const [guesses] = useState(['*****', '*****', '*****', '*****', '*****', '*****'])
  const [step, setStep] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
//'penis'.toUpperCase()
  

  const requestNewWord = () => {
    axios.get('http://localhost:3777/validWordle').then(payload => setWord(payload.data.toUpperCase()))
  }

 


  useEffect(() => requestNewWord(), [])


  console.log(word)
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