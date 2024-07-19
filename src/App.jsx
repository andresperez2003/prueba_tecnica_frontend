// src/App.js
import React, { useState } from 'react';
import TimeInputForm from './components/TimeInputForm';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import ResponsiveAppBar from './components/ResponsiveAppBar';
const App = () => {

  const [value, setValue] = useState("");
  
  const updateValue = (newValue) => {
    setValue(newValue);
    console.log(value);
  };

  return (
    <div className="App">
      
      <ResponsiveAppBar value={value} onUpdateValue={updateValue} />
      
      
      
      
    </div>
  );
};



export default App;
