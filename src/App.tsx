import React, { useState } from 'react';
import { setSyntheticLeadingComments } from 'typescript';
import './App.css';
import Title from './Title';


function App() {
  const [title, setTitle] = useState<string>('aaaa')
  const [value,setValue] = useState<string>('')
  return (
    <div className='App'>
      <Title title={title}/>
      
      <input type="text"
      value ={value}
      onChange={(e) => {
        setValue(e.target.value)
        console.log(e.target.value)

      }}
      />

      <button 
      onClick={() => {
        setTitle(value)
      }}>
      버튼</button>
    </div>
  );
}

export default App;
