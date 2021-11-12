import './App.css';
import {Entry} from "./pages/Entry.page"
import {DefaultLayout} from "./layout/DefaultLayout"
import {Dashboard} from './pages/Dashboard.page'

function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
        <Dashboard/>
      </DefaultLayout>
    </div>
  );
};

export default App;
