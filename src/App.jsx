import { useState } from 'react';
import { statementList } from './data';
import './App.css';
import './styles.css';

function App() {
  const [index, setIndex] = useState(0);

  let statement = statementList[index];
  let hasPrev = index > 0;
  let hasNext = index < statementList.length - 1;

  function handlePrevClick() {
    setIndex(index - 1);
  }

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleRandom() {
    setIndex(Math.floor(Math.random() * statementList.length))
  }

  return (
    <div class="container">
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
        <button
          onClick={handlePrevClick}
          disabled={!hasPrev}>
          &#8592;
        </button>
        <button
          onClick={handleRandom}>
          &#8596;
        </button>
        <button
          onClick={handleNextClick}
          disabled={!hasNext}>
          &#8594;
        </button>
        <p className="small">
          ({index + 1} of {statementList.length})
        </p>
      </div>
    </div>
  )
}

export default App
