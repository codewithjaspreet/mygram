import React from 'react'
import SignUp from "./Components/auth/SignUp";
import './App.css'
import {BrowserRouter , Route ,Routes} from 'react-router-dom'
import Login from './Components/auth/Login';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" Component={SignUp}> </Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/signup" Component={SignUp}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App