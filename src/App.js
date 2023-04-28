import './App.css';
import Home from './Home';
import Edit from './Edit';
import View from './View';
import Breakfast from './Breakfast';
import NewEntry from './NewEntry';
import About from './About';
import Navbar from './Navbar';
import MealEdit from './MealEdit';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Created a function called 'App' that returns 'Router', 'Routes' and 'Route'. 
function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>My Food Log</h1>
          <Navbar>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </Navbar>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='NewEntry' element={<NewEntry />} />
          <Route path='edit' element={<Edit />} />
          <Route path='view' element={<View />} />
          <Route path='breakfast' element={<Breakfast />} />
          <Route path='about' element={<About />} />
          <Route path='navbar' element={<Navbar />} />
          <Route path='mealedit' element={<MealEdit />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
