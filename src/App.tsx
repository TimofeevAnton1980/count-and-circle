import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);
  const [x, change] = useState<number>(1)
    const add = () => {
        setCount(count + 1);
        change( x + 0.5);
    }
    const remove = () => {
        setCount(count - 1);
        change( x - 0.5);
    };

  return (
      <main className='main'>
        <section className='buttons'>
        <button className="plus" onClick={add} disabled={count === 4}>+</button>
        <span className='count'>{count}</span>
        <button className="minus" onClick={remove} disabled={count === 0}>-</button>
        </section>
        <div className="circle" style={{transform: `scale(${x})`}}></div>
      </main>
  );
}

export default App;
