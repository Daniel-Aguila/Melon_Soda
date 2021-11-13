import './App.css';
import {Entry} from "./pages/Entry.page"
import {DefaultLayout} from "./layout/DefaultLayout"
import {Dashboard} from './pages/Dashboard.page'
import {AddTicket} from './pages/AddTicket.page'
import {TicketLists} from './pages/TicketLists.page'

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        {/*<Dashboard/>*/}
        {/* <AddTicket/> */}
        <TicketLists/>
        {/*<Entry/>*/}
      </DefaultLayout>
    </div> 
  );
};

export default App;
