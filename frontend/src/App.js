import './App.css';
import {Entry} from "./pages/Entry.page"
import {Dashboard} from './pages/Dashboard.page'
import {AddTicket} from './pages/AddTicket.page'
import {TicketLists} from './pages/TicketLists.page'
import {Ticket} from './pages/Ticket.page'
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

//You need to engulf everything in router and Routes, and then assign their designated paths
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<Entry/>}/>

          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/add-ticket" element={<AddTicket/>}/>
          <Route path="/tickets" element={<TicketLists/>}/>
          <Route path="/ticket/:tid" element={<Ticket/>}/>


      </Routes>
      </Router>
    </div> 
  );
};

export default App;
