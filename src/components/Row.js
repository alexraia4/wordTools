import '../styles/Row.css'
import Letter from './Letter'

function Row({wordArr}) {
  return (
    <div className="Row">
      {wordArr.map(letter => <Letter letter={letter}/>)}
    </div>
  );
}

export default Row;