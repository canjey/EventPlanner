import logo from './logo.svg';
import './App.css';
import HomePage from './Containers/Homepage'
import Login from './Containers/Login'
import {Route, Routes} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken}/>
  // }

  return (
    <>
    <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  );
}

export default App;

