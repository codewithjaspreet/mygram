import React from 'react'
import SignUp from "./Components/auth/SignUp";
import './App.css'
import {BrowserRouter , Route ,Routes} from 'react-router-dom'
import Login from './Components/auth/Login';

import { AuthProvider } from './GlobalStore/AuthContext';

const App = () => {
  return (
    <BrowserRouter>

    <AuthProvider>
      <Routes>
        <Route path= "/" Component={SignUp}> </Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/signup" Component={SignUp}></Route>
      </Routes>

    </AuthProvider>
      
    </BrowserRouter>
  );
}

export default App