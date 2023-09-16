import { Terminal } from './components/Terminal/Terminal';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Background } from './components/Background/Background';
import { Landing } from './views/Landing/Landing';
import { NavBar } from './components/NavBar/NavBar';
import { About } from './views/About/About';
import { Projects } from './views/Projects/Projects';
import { Techs } from './views/Techs/Techs';

function App() {

  return (
    <div className="App">
      <Background/>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/techs" element={<Techs />} />
      </Routes>
    </div>
  );
}

export default App;
