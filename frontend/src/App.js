import './App.css';
import {Entry} from "./pages/Entry.page"
import {Dashboard} from './pages/Dashboard.page'
import {AddTicket} from './pages/AddTicket.page'
import {TicketLists} from './pages/TicketLists.page'
import {Ticket} from './pages/Ticket.page'
import React from 'react';
import { PrivateRoute } from './components/PrivateRoute.comp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

//You need to engulf everything in router and Switch, and then assign their designated paths
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/"><Entry/></Route>

          <PrivateRoute path="/dashboard"><Dashboard/></PrivateRoute>
          <PrivateRoute path="/add-ticket"><AddTicket/></PrivateRoute>
          <PrivateRoute path="/tickets"><TicketLists/></PrivateRoute>
          <PrivateRoute path="/ticket/:tid"><Ticket/></PrivateRoute>


      </Switch>
      </Router>
    </div> 
  );
};

export default App;
