import React from 'react';
import './App.css';
import Greetings from './components/Greetings/Greetings'

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  }
  return (
    <div>
      <Greetings name='kim' mark='!!!' optional='optional' onClick={onClick} />
    </div>
  );
}

export default App;
