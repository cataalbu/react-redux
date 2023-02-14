import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const handleInc = () => {
    dispatch({ type: 'INC' });
  };
  const handleDec = () => {
    dispatch({ type: 'DEC' });
  };
  const handleAdd = () => {
    dispatch({ type: 'ADD', payload: value });
  };

  return (
    <div>
      <h1>App counter</h1>
      <h2>{counter}</h2>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
      <input type="number" onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default App;
