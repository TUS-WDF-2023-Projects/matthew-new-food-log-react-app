import './App.css';
import Home from './Home';
import Edit from './Edit';
import View from './View';
import Breakfast from './Breakfast';
import newEntry from './NewEntry';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Created a function called 'App' that returns 'Router', 'Routes' and 'Route'. 
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='newEntry' element={<newEntry />} />
          <Route path='edit' element={<Edit />} />
          <Route path='view' element={<View />} />
          <Route path='breakfast' element={<Breakfast />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
