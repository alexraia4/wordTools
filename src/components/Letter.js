import '../styles/Letter.css'

function Letter({letter}) {
  console.log('Letter: ', letter)
  return (
    <div className="Letter">
      {letter}
    </div>
  );
}

export default Letter;