import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

//components
import SignUp from './components/SignUp';
import Login from './components/Login';
import NavBar from './components/NavBar';
import TripGrid from './components/TripGrid';

function App() {
  return (
    <div className="App">
      <NavBar />
      <TripGrid />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
    </div>
  );
}

export default App;
