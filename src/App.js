import './App.css';
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MealEntries from './Components/MealEntries';
import NewMealEntryForm from './Components/NewMealEntryForm';
import './Components/App.css';
import SingleMealEntry from './Components/SingleMealEntry';

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
  const [data, setData] = useState(meals);

  const addNewMeal = (newMealEntry) => {

    // Generate a random number between 1 and 100 
    let randomID = Math.floor(Math.random() * 100) + 1
    newMealEntry.id = randomID;

    setData([...data, newMealEntry]);
  };

  const DeleteEntry = (entryID) => {
    let updatedEntries = data.filter((entry) => (entry.id !== entryID));
    setData(updatedEntries);
  };

  const updateMeal = (updatedMeal) => {
    const updatedMeals = data.map((meal) =>
      meal.id === updatedMeal.id ? updatedMeal : meal
    );
    setData(updatedMeals);
  }

  return (
    <Router>
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
        </Routes>
      </div>
      {/* <MealEntries meals={meals} onDelete={DeleteEntry} /> */}
    </Router>

  )
};

export default App;
