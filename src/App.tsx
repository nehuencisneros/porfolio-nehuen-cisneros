import './App.css';
import { Background } from './components/Background/Background';
import { NavBar } from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="particles">
        <Background />
      </div>
    </div>
  );
}

export default App;
