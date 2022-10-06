import { useState } from 'react';
import { useCakeCounter } from '../../hooks/useCakeCounter/useCakeCounter';
import { useIceCramCounter } from '../../hooks/useIceCramCounter/useIceCramCounter';

const Counter = ({ title }) => {
    const [countInput, setCountInput] = useState(0);
  const counter =
    title === 'cake counter' ? useCakeCounter() : useIceCramCounter();
  const { count, increase, decrease, set, reset } = counter;
  return (
    <main className=" container md:w-[95%] p-4 mt-2 flex flex-col justify-center  bg-slate-300 min-h-[400px] rounded-md">
      <header className="text-center text-lg font-bold ">{title}</header>
      <section className="bg-slate-400 flex items-center justify-center rounded-md ">
        <span className="text-9xl text-white text-center ">{count.qty}</span>
      </section>

      <section className="mt-2 flex justify-evenly items-center p-3 rounded-md">
        <button
          onClick={increase}
          className="px-4 py-2 bg-slate-500 rounded-md shadow-lg shadow-slate-400 text-white cursor-pointer transition-all hover:scale-105"
        >
          Increase
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-slate-500 rounded-md shadow-lg shadow-slate-400 text-white cursor-pointer transition-all hover:scale-105"
        >
          Reset
        </button>
        <button
          onClick={decrease}
          className="px-4 py-2 bg-slate-500 rounded-md shadow-lg shadow-slate-400 text-white cursor-pointer transition-all hover:scale-105"
        >
          Decrease
        </button>
      </section>

      <section className="mt-2 flex gap-4  justify-center items-center p-3 rounded-md">
        <label htmlFor="setInput">set {title} :</label>
        <input
          value={countInput}
          onChange={({ target }) => setCountInput(target.value)}
          id="setInput"
          type="number"
          className="px-3 py-1"
        />{' '}
        <button
          onClick={() => set(countInput)}
          className="px-4 py-1 bg-slate-500 rounded-md shadow-lg shadow-slate-400 text-white cursor-pointer transition-all hover:scale-105"
        >
          set
        </button>
      </section>
    </main>
  );
};

export default Counter;
