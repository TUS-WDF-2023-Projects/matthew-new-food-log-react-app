import React, { useState, useEffect } from "react";
import Meals from "./Meals";
import { useNavigate } from 'react-router-dom';
import './index.css';

// Created an 'Edit' Function that uses the 'useState' hook to create stateful variables. 
function Edit() {
    const [id, setId] = useState("");
    const [meal, setMeal] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

    let history = useNavigate();

    // This code uses the '.map' and 'indexOf' methods to find the index of an object in an array based on a specific property value. 
    var index = Meals.map(function (e) {
        return e.id
    }).indexOf(id);

    // Created a 'handleSubmit' function that is used to update an existing meal in the 'Meals' array and return to the homepage once the user has updated the form.
    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Meals[index];
        a.id = id;
        a.meal = meal;
        a.time = time;
        a.date = date;

        history("/");

    }

    // The 'useEffect' hook is being used to get data from 'localStorage' and set it to the components state variables.
    useEffect(() => {
        setId(localStorage.getItem('Id'))
        setMeal(localStorage.getItem('Meal'))
        setTime(localStorage.getItem('Time'))
        setDate(localStorage.getItem('Date'))
    }, [])

    return (
        <div>
            <from style={{}} >
                <label>ID:</label><br />
                <input type="number" onChange={(e) => setId(e.target.value)}></input><br /><br />
                <label>Meal:</label><br />
                <select onChange={(e) => setMeal(e.target.value)}>
                    <option>Breakfast</option>
                    <option>Snack</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                </select><br /><br />
                <label>Time:</label><br />
                <input type="time" onChange={(e) => setTime(e.target.value)}></input><br /><br />
                <label>Date:</label><br />
                <input type="date" onChange={(e) => setDate(e.target.value)}></input><br /><br />
                <button id="update-button" onClick={(e) => handleSubmit(e)} type="submit">Update</button>
            </from>
        </div>
    )

}

export default Edit;