import { Terminal } from './components/Terminal/Terminal';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Terminal />} />
      </Routes>
    </div>
  );
}

export default App;
