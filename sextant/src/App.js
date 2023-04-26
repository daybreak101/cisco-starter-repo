import './App.css';
import './Exhibition.css';
import './Header.css'

import Exhibition from './Exhibition'
import GetIP from './GetIP'

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
 
    </div>
  );
}

export default App;
