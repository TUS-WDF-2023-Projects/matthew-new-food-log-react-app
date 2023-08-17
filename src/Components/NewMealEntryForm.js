import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NewMealEntryForm = ({ addNewMeal }) => {
    const [meal, setMeal] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');

    const navigate = useNavigate();

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

    const handleSubmit = (event) => {
        event.preventDefault();
        // onSave({ meal, time, date, price });

        // Create a new Object Entry

        const newEntry = {
            meal,
            time,
            date,
            price: parseFloat(price),
        };

        // Call the addNewMeal function to save the new entry
        addNewMeal(newEntry);

        // Reset fields

        setMeal('');
        setDate('');
        setTime('');
        setPrice('');

        // Navigate back to the home page ("/")
        navigate('/');

    };

    return (
        <div className='container'>
            <h2>New Meal Entry Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Meal:
                    <select type="text" value={meal} onChange={handleMealChange}>
                        <option value="">Select A Meal</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Snack">Snack</option>
                        <option value="Dinner">Dinner</option>
                    </select>
                </label>
                <br />
                <label>
                    Time:
                    <input type="time" value={time} onChange={handleTimeChange} />
                </label>
                <br />
                <label>
                    Date:
                    <input type="date" value={date} onChange={handleDateChange} />
                </label>
                <br />
                <label>
                    Price:
                    <input type="number" value={price} onChange={handlePriceChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
                <Link to="/"><button>Cancel</button></Link>
            </form>
        </div>
    );
};

export default NewMealEntryForm;