import './App.css';
import Home from './pages/Home';
import CreatePerson from './pages/CreatePerson';
import Person from './pages/Person';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Usuários Geomais
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/persons" element={<Home />} />
          <Route path="/create" element={<CreatePerson />}/>
          <Route path="/persons/:id" element={<Person/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
