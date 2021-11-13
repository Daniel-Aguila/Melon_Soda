import './App.css';
import {Entry} from "./pages/Entry.page"
import {DefaultLayout} from "./layout/DefaultLayout"
import {Dashboard} from './pages/Dashboard.page'
import {AddTicket} from './pages/AddTicket.page'
import {TicketLists} from './pages/TicketLists.page'
import {Ticket} from './pages/Ticket.page'

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        {/*<Dashboard/>*/}
        {/* <AddTicket/> */}
        {/* <TicketLists/> */}
        <Ticket/>
        {/*<Entry/>*/}
      </DefaultLayout>
    </div> 
  );
};

export default App;
