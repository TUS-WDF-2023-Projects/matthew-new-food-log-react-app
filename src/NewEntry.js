import React, { useState } from "react";
import Meals from "./Meals";
import { Link, useNavigate } from "react-router-dom";

// Created a function called 'newEntry' that uses the 'UseState' hook.
function NewEntry() {
    const [id, setId] = useState('');
    const [meal, setMeal] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    // { format(date(), 'dd-MM-yyy') }

    let history = useNavigate();

    // Created a 'handleSumbit' function that is called when the form is submitted. 
    const handleSubmit = (e) => {
        e.preventDefault();

        // This code generates a new Unique Id and creates a new meal object with the id, meal, time and date values and adds it to an array of meals called 'Meals'. 
        //const ids = uuidv4();
        // let uniqueId = ids.slice(0, 8);

        let uniqueId = id,
            a = meal,
            b = time,
            c = date;

        Meals.push({ id: uniqueId, meal: a, time: b, date: c });

        history("/");

    }

    return (
        <div>
            <from>
                <label>ID:</label>
                <input type="number" onChange={(e) => setId(e.target.value)}></input><br />
                <label>Meal:</label>
                <select onChange={(e) => setMeal(e.target.value)}>
                    <option>Breakfast</option>
                    <option>Snack</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                </select><br />
                <label>Time:</label>
                <input type="time" onChange={(e) => setTime(e.target.value)}></input><br />
                <label>Date:</label>
                <input type="date" onChange={(e) => setDate(e.target.value)}></input><br />
                <Link to="/newentry">
                    <button onClick={(e) => handleSubmit(e)} type="submit">Add New Entry</button>
                </Link>
            </from>
        </div>
    )
}

export default NewEntry;