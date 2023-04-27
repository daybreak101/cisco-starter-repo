import './App.css';
import './Exhibition.css';
import './Header.css'

import Exhibition from './Exhibition'
import GetIP from './GetIP'
import Latency from './Latency'

function App() {
  return (
    <div className="App">
        <div className="Header">
            <h1>Sextant</h1>
        </div> 

        <Exhibition header="This is your IPv4 address">
            <GetIP version ='4'/>
        </Exhibition>

        <Exhibition header="This is your IPv6 address">
            <GetIP version ='6'/>
          </Exhibition>
          <Exhibition header="Latency from Pylon (in ms)">
              <Latency />
          </Exhibition >

 
    </div>
  );
}

export default App;
