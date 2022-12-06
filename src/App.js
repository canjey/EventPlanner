import * as React from 'react';
import Homepage from './Containers/Homepage.js';
import {Route, Routes} from "react-router-dom";



export default function App() {
  return (
    <>
        <Routes>
          <Route path="/home" element={<Homepage/>}/>
         </Routes>
    </>
  );
}
