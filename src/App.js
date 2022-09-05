import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const onClickMinus = () => {
    setCount(prevState => prevState - 1);
  }

  const onClickPlus = () => {
    setCount(prevState => prevState + 1);
  }

  return (
      <div className="App">
          <div>
              <h1>Счетчик:</h1>
              <h1>{count < 0 ? 0 : count }</h1>
              <button onClick={onClickMinus} className="minus">- Минус</button>
              <button onClick={onClickPlus} className="plus">Плюс +</button>
          </div>
      </div>
  );
}
export default App;
