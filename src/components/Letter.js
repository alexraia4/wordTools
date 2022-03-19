import '../styles/Letter.css'

function Letter({letter, wordArr, index}) {

  let color = {
    backgroundColor: wordArr[index] === letter ? 'green' : wordArr.includes(letter) ? 'orange' : 'rgb(75, 73, 73)'
  }
  
  return (
    <div className="Letter" style={color}>
      {letter}
    </div>
  );
}

export default Letter;