import './App.css';
import Home from './Home';
import Edit from './Edit';
import View from './View';
import Breakfast from './Breakfast';
import NewEntry from './NewEntry';
import About from './About';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, BrowserRouter } from 'react-router-dom';

// Created a function called 'App' that returns 'Router', 'Routes' and 'Route'. 
function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>My Food Log</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='NewEntry' element={<NewEntry />} />
          <Route path='edit' element={<Edit />} />
          <Route path='view' element={<View />} />
          <Route path='breakfast' element={<Breakfast />} />
          <Route path='about' element={<About />} />
          <Route path='navbar' element={<Navbar />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
