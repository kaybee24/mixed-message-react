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
    <div class="container text-gray-900 max-h-full ">
      <div class="grid bg-white">
        <div class="grid md:grid-rows-6 md:grid-cols-4 gap-4 bg-black">
          <div class="bg-slate-400 md:col-span-2 md:row-span-6">01</div>
          <div class="p-5 sm:grid-cols-2 md:row-span-3 bg-white">
            <p class="text-4xl text-left leading-snug uppercase">
              {statement.quote}
            </p>
          </div>
          <div class="bg-slate-400 sm:grid-cols-2 md:row-span-3">03</div>
          <div class="md:col-span-2 bg-white">
            <h2 class="text-9xl font-bold tracking-widest uppercase">
              {statement.name}
            </h2>
          </div>
          <div class="bg-slate-400 md:col-span-2 md:row-span-2 bg-white"><img
            class="object-none"
            src={statement.url}
          />
          </div>
        </div>
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
          <p>
            ({index + 1} of {statementList.length})
          </p>
        </div>
      </div>
    </div >
  )
}

export default App
