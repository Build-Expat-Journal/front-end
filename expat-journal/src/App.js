import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

//components
import SignUp from './components/SignUp';
import Login from './components/Login';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
    </div>
  );
}

export default App;
