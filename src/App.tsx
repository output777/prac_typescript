import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Greetings from './components/Greetings/Greetings'
import Myform from './components/MyForm/Myform';

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  }
  return (
    <div>
      <Myform />
      <Counter />
      <Greetings name='kim' mark='!!!' optional='optional' onClick={onClick} />
    </div>
  );
}

export default App;
