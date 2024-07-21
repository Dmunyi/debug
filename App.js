
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent count={count} key={count} /> {/* Add key prop to ensure re-render */}
    </div>
  );
}

export default App;