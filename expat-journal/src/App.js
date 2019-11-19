import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

//components
import SignUp from './components/SignUp';
import Login from './components/Login';
import NavBar from './components/NavBar';
import TripGrid from './components/TripGrid';
import Photos from './components/Photos';
import SplashPage from './components/SplashPage';
import PrivateRoute from './components/PrivateRoute';
import NewTripForm from './components/NewTripForm';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path='/newtrip' component={NewTripForm} />
      <Route path='/SplashPage' component={SplashPage} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <PrivateRoute path='/photos' component={Photos} />
      <PrivateRoute path='/trips' component={TripGrid} />

    </div>
  );
}

export default App;
