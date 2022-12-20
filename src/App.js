import logo from './logo.svg';
import './App.css';
import HomePage from './Containers/Homepage'
import Tickets from './Containers/Tickets'
import MyEvents from './Containers/MyEvents'
import EventsDetails from './Containers/EventsDetails'
import Payments from './Containers/Payments';
import Downloads from './Containers/Downloads'
import {Route, Routes} from "react-router-dom";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@emotion/react";



const theme = createTheme({
  typography: {
    fontFamily: 'Inria Serif',
    fontWeight: '250'
  },
})


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/tickets" element={<Tickets/>}/>
          <Route path="/myEvents" element={<MyEvents/>}/>
          <Route path="/eventsDetails" element={<EventsDetails/>}/>
          <Route path="/eventsDetails/pay" element={<Payments/>}/>
          <Route path="/eventsDetails/pay/tickets" element={<Downloads/>}/>
          
    </Routes>
    </ThemeProvider>

    </>
  );
}

export default App;
