import logo from './logo.svg';
import './App.css';
import HomePage from './Containers/Homepage'
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
          <Route path="/" element={<HomePage/>}/>
    </Routes>
    </>
  );
}

export default App;
