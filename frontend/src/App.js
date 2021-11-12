import './App.css';
import {Entry} from "./pages/Entry.page"
import {DefaultLayout} from "./layout/DefaultLayout"
import {Dashboard} from './pages/Dashboard.page'
import {AddTicket} from './pages/AddTicket.page'

function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
        {/*<Dashboard/>*/}
        {<AddTicket/>}
      </DefaultLayout>
    </div>
  );
};

export default App;
