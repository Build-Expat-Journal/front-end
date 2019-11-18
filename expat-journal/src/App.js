import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Route path='/signup' component={SignUp} />
    </div>
  );
}

export default App;
