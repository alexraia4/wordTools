import '../styles/Row.css'
import Letter from './Letter'

function Row({guessArr, wordArr}) {
  return (
    <div className="Row">
      {guessArr.map((letter, index) => <Letter letter={letter} wordArr={wordArr} index={index} key={index} />)}
    </div>
  );
}

export default Row;