import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// This code renders a form that allows users to input data for a new meal entry
const NewMealEntryForm = ({ addNewMeal }) => {
    const [meal, setMeal] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    // The 'useNavigate' hook is used to navigate from page to page
    const navigate = useNavigate();

    // This code is responsible for handling changes within the form
    const handleMealChange = (event) => {
        setMeal(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // onSave({ meal, time, date, price });

        // Create a new Object Entry
        const newEntry = {
            meal,
            time,
            date,
            price,
            description,
        };

        // Call the addNewMeal function to save the new entry
        addNewMeal(newEntry);

        // Reset fields
        setMeal('');
        setDate('');
        setTime('');
        setPrice('');
        setDescription('');

        // Navigate back to the home page ("/")
        navigate('/');

    };

    return (
        <div className='form-container'>
            <h2 className='centered-heading'>Add New Meal Entry</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>
                        Meal:
                    </label><br />
                    <select className='form-input' type="text" value={meal} onChange={handleMealChange}>
                        <option value="">Select A Meal</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Snack">Snack</option>
                        <option value="Dinner">Dinner</option>
                    </select>
                </div>
                <br />
                <div className='form-group'>
                    <label>
                        Time:
                    </label><br />
                    <input className='form-input' type="time" value={time} onChange={handleTimeChange} />
                </div>
                <br />
                <div className='form-group'>
                    <label>
                        Date:
                    </label><br />
                    <input className='form-input' type="date" value={date} onChange={handleDateChange} />
                </div>
                <br />
                <div className='form-group'>
                    <label>
                        Price:
                    </label><br />
                    <input className='form-input' type="number" value={price} onChange={handlePriceChange} />
                </div>
                <br />
                <div className='form-group'>
                    <label>
                        Description:
                    </label><br />
                    <input className='form-input' type="text" value={description} onChange={handleDescriptionChange} />
                </div>
                <br />
                <div className='btn-new-meal'>
                    <button className='btn btn-primary' type="submit" style={{ margin: '0 10px', display: 'inline-block' }}>Submit</button>
                    <Link to="/"><button className='btn btn-dark'>Cancel</button></Link>
                </div>
            </form>
        </div>
    );
};

export default NewMealEntryForm;