import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './component/Box';

function App() {
  const [counter2, setCounter2] = useState(0);
  const increase = () => {
    setCounter2(counter2 + 1); // 비동기 작동
  };
  return (
    <div>
      <div>state:{counter2}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
}

export default App;
