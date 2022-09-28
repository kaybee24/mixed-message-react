import { useState } from 'react';
import { statementList } from './data';
import Buttons from './components/Buttons';
import './App.css'

function App() {
  const [index, setIndex] = useState(0);

  function handleRandom() {
    Math.floor(Math.random() * id.length)
    return id[handleRandom]
  }

  function handlePrevClick() {
    setIndex(index + 1);
  }

  function handleNextClick() {
    setIndex(index + 1);
  }

  let statement = statementList[index];

  return (
    <>
      <p>
        {statement.quote}
      </p>
      <img
        src={statement.url}
      />
      <h2>
        {statement.name}
      </h2>
      <div>
        <button onClick={handlePrevClick}>
          Previous
        </button>
        <button onClick={handleRandom}>
          Random Quote
        </button>
        <button onClick={handleNextClick}>
          Next
        </button>
        <h3>
          ({index + 1} of {statementList.length})
        </h3>
      </div>
    </>
  )
}

export default App
