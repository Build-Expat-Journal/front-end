import React, {useState} from 'react';
import './App.css';
import { Route } from 'react-router-dom'

//components
import Login from './components/Login';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import TripGrid from './components/TripGrid';
import Photos from './components/Photos';
import SplashPage from './components/SplashPage';
import PrivateRoute from './components/PrivateRoute';
import NewTripForm from './components/NewTripForm';
import UpdateTripForm from './components/UpdateTripForm';


function App() {

  const [userId, setUserId] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <Route path='/newtrip' render={props => <NewTripForm {...props} />} />
      <Route exact path='/' render={props => <SplashPage {...props} />} />
      <Route path='/login' render={props => <Login {...props} />} />
      <Route path='/signup' render={props => <SignUp {...props} />} />
      <Route path='/update' render={props => <UpdateTripForm {...props} />} />
      <PrivateRoute path='/photos' component={Photos} />
      <PrivateRoute path='/trips' component={TripGrid} />
    </div>
  );
}

export default App;
