import './App.css';
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';

const meals = [
  {
    id: 1,
    meal: "Breakfast",
    date: "15-08-2023",
    time: "08:00 AM",
    price: "6.50"
  },
  {
    id: 2,
    meal: "Lunch",
    date: "15-08-2023",
    time: "12:30 PM",
    price: "15.99"
  },
  {
    id: 3,
    meal: "Snack",
    date: "15-08-2023",
    time: "03:30 PM",
    price: "3.50"
  },
  {
    id: 4,
    meal: "Dinner",
    date: "15-08-2023",
    time: "07:00 PM",
    price: "20.99"
  }
];

function App() {
  const [data, setData] = useState(meals);

  const addNewMeal = (newMealEntry) => {

    // Generate a random number between 1 and 100 
    let randomID = Math.floor(Math.random() * 100) + 1
    newMealEntry.id = randomID;

    setData([...data, newMealEntry]);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li></li>
          </ul>
        </nav>
        <Routes>
          <Route>

          </Route>
        </Routes>
      </div>
    </Router>

  )
};

export default App;
