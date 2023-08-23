import './App.css';
import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MealEntries from './Components/MealEntries';
import NewMealEntryForm from './Components/NewMealEntryForm';
import './Components/App.css';
import SingleMealEntry from './Components/SingleMealEntry';
import About from './Components/About';

// This is an array called 'meals' which contains objects representing different meals.
const meals = [
  {
    id: 1,
    meal: "Breakfast",
    date: "2023-08-15",
    time: "08:00",
    price: "6.50",
    description: "Cereal and Tea"
  },
  {
    id: 2,
    meal: "Lunch",
    date: "2023-08-15",
    time: "12:30",
    price: "15.99",
    description: "Sandwich and Tea"
  },
  {
    id: 3,
    meal: "Snack",
    date: "2023-08-15",
    time: "15:30",
    price: "3.50",
    description: "Fruit"
  },
  {
    id: 4,
    meal: "Dinner",
    date: "2023-08-15",
    time: "19:00",
    price: "20.99",
    description: "Chicken Pasta Bake"
  }
];

function App() {
  // The 'useState' hook returns an array with two elements - 'data' (current value of the state) and 'setData' (function that can be used to update the state)
  const [data, setData] = useState(meals);
  // This function is adding a new meal to the existing array
  const addNewMeal = (newMealEntry) => {

    // Generate a random number between 1 and 100 
    let randomID = Math.floor(Math.random() * 100) + 1
    newMealEntry.id = randomID;
    // This code updates the state by adding a new entry to the array
    setData([...data, newMealEntry]);
  };

  // This function is responsible for deleting an entry
  const DeleteEntry = (entryID) => {
    // The 'filter' function is called to create a new array of entries
    let updatedEntries = data.filter((entry) => (entry.id !== entryID));
    setData(updatedEntries);
  };

  // This code declares a variable named 'updatedMeals' which holds the updated data after the meal entry has been updated
  const updateMeal = (updatedMeal) => {
    // The 'map' function is called on the data array to create a new array of meals
    const updatedMeals = data.map((meal) =>
      // The function checks wheather the 'id' of the meal matches the id of the the 'updatedMeal'
      meal.id === updatedMeal.id ? updatedMeal : meal
    );
    // This code is used to update the state of the 'updatedMeals' array
    setData(updatedMeals);
  }

  return (
    <Router>
      <header className='header-links'>
        <Link to="/" style={{ margin: '0 10px', display: 'inline-block' }}>Home</Link>
        <Link to="/about">About</Link>
      </header>
      <div>
        <nav>
          <ul>
            <li>
              {/* <Link to="/NewMealEntryForm"><button>Add New Entry</button></Link> */}
            </li>
          </ul>
        </nav>
        <Routes>
          {/* <Route path="/NewMealEntryForm" element={<NewMealEntryForm />} /> */}
          {/* <Route path="/SingleMealEntry/:id" element={<SingleMealEntry meals={data} onDelete={DeleteEntry} />} /> */}
          {/* <Route path="/" element={<MealEntries meals={data} onDelete={DeleteEntry} />} /> */}
          <Route path="/" element={<MealEntries meals={data} onDelete={DeleteEntry} />} />
          <Route path="/NewMealEntryForm" element={<NewMealEntryForm addNewMeal={addNewMeal} />} />
          <Route path="/SingleMealEntry/:id" element={<SingleMealEntry meals={data} onUpdate={updateMeal} />} />
          <Route path="/NewMealEntryForm" element={<NewMealEntryForm />} />
          <Route path='/'>Home</Route>
          <Route path="/about" element={
            <About>

            </About>}
          />
        </Routes>
      </div>
      {/* <MealEntries meals={meals} onDelete={DeleteEntry} /> */}
    </Router >

  )
};

export default App;
