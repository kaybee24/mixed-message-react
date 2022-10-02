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
      <div class="grid">
        <div class="grid md:grid-rows-5 md:grid-cols-4 gap-4 bg-gray-900">
          <div class="bg-slate-400 md:col-span-2 md:row-span-6 trim-1"><img
            class="object-none"
            src={statement.url1}
          /></div>
          <div class="p-5 grid-cols-2 md:row-span-2 bg-white">
            <p class="text-2xl text-left leading-snug uppercase">
              {statement.quote}
            </p>
          </div>
          <div class="bg-slate-400 grid-cols-2 md:row-span-2 trim-2"><img
            class="object-none"
            src={statement.url2}
          /></div>
          <div class="md:col-span-2 bg-white">
            <h2 class="text-8xl font-bold tracking-widest uppercase">
              {statement.name}
            </h2>
          </div>
          <div class="bg-slate-400 md:col-span-2 md:row-span-2 bg-white trim-3"><img
            class="object-none"
            src={statement.url3}
          />
          </div>
        </div>
        <div>
          <button
            className="rounded-full bg-rose-500 px-4 py-3 mx-3"
            onClick={handlePrevClick}
            disabled={!hasPrev}>
            &#8592;
          </button>
          <button
            className="rounded-full bg-rose-500 px-4 py-3 mx-3"
            onClick={handleRandom}>
            &#8596;
          </button>
          <button
            className="rounded-full bg-rose-500 px-4 py-3 mx-3"
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
