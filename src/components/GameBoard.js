import '../styles/GameBoard.css'
import Row from './Row'

function GameBoard() {

  return (
    <div className="GameBoard">
      <Row wordArr={'train'.split('')}/>
      <Row wordArr={'*****'.split('')}/>
      <Row wordArr={'*****'.split('')}/>
      <Row wordArr={'*****'.split('')}/>
      <Row wordArr={'*****'.split('')}/>
      <Row wordArr={'*****'.split('')}/>
    </div>
  );
}

export default GameBoard;