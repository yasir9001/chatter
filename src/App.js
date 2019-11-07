import React from 'react';
import './assets/scss/base.scss';
import { BrowserRouter, Route } from 'react-router-dom'

import MainScreen from './components/main-screen/MainScreen'
import Signup from "./components/signup/Singup"
import Login from './components/login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact render={(props) => <MainScreen {...props} />} />
        <Route path="/signup" exact render={(props) => <Signup {...props} />} />
        <Route path="/login" exact render={(props) => <Login {...props} />} />
      </BrowserRouter>
    </>
  );
}

export default App;
