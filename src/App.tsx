import './App.css';
import { Background } from './components/Background/Background';
import { NavBar } from './components/NavBar/NavBar';
import { Terminal } from './components/Terminal/Terminal';


function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <div className="particles">
        <Background />
      </div>
        <Terminal/>
    </div>
  );
}

export default App;
