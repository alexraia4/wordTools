import '../styles/GameBoard.css'
import Row from './Row'

function GameBoard({guesses}) {
  return (
    <div className="GameBoard">
      {guesses.map(guess => <Row wordArr={guess.split('')}/>)}
    </div>
  );
}

export default GameBoard;