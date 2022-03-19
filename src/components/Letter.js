import '../styles/Letter.css'

function Letter({letter}) {
  let color = {
    backgroundColor: true ? 'gray' : 'green'
  }
  
  return (
    <div className="Letter" style={color}>
      {letter}
    </div>
  );
}

export default Letter;