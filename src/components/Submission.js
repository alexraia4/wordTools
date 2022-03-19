import '../styles/Submission.css'
import { useState } from 'react'

function Submission({guesses, setGuesses, step, setStep}) {
  const [guess, setGuess] = useState('')
  
  const handleSubmit = () => {
    
    let newGuesses = guesses
    newGuesses[0] = 'qwert'
    console.log('GUESSES: ', guesses)
    console.log('NEWGUESSES: ', newGuesses)
    
    //guesses[step] = guess
    setGuesses(newGuesses)
    // setStep(step++)
    // console.log('SUB GUESSES: ', guesses)
  }

  return (
    <div className="Submission">
      <input type="text" onChange={(e) => setGuess(e.target.value)}/>
      <div className='Submission_submit' onClick={handleSubmit}>Submit</div>
    </div>
  );
}

export default Submission;