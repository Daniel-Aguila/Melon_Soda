import './App.css';
import {Entry} from "./pages/Entry.page"
import {DefaultLayout} from "./layout/DefaultLayout"
import {Dashboard} from './pages/Dashboard.page'
import {AddTicket} from './pages/AddTicket.page'

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        {/*<Dashboard/>*/}
        <AddTicket/>
        {/*<Entry/>*/}
      </DefaultLayout>
    </div> 
  );
};

export default App;
