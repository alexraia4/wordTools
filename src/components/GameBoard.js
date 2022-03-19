import '../styles/GameBoard.css'
import Row from './Row'

function GameBoard({guesses, word}) {
  return (
    <div className="GameBoard">
      {guesses.map((guess, index) => <Row guessArr={guess.split('')} wordArr={word.split('')} key={index} />)}
    </div>
  );
}

export default GameBoard;