import React from 'react';
import Greeting from './Components/Greeting';
import Counter from './Components/Counter';
import Button from './Components/Button';

function App() {
  return (
    <div>
    <Greeting name="Kim" />
    <Counter startingValue={10} />
    <Button />
    </div>
  )
}

export default App;
