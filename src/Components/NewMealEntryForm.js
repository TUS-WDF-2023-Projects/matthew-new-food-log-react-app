import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NewMealEntryForm = ({ addNewMeal }) => {
    const [meal, setMeal] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

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
                <label>
                    Meal:
                    <select className='form-input' type="text" value={meal} onChange={handleMealChange}>
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
                    <input className='form-input' type="time" value={time} onChange={handleTimeChange} />
                </label>
                <br />
                <label>
                    Date:
                    <input className='form-input' type="date" value={date} onChange={handleDateChange} />
                </label>
                <br />
                <label>
                    Price:
                    <input className='form-input' type="number" value={price} onChange={handlePriceChange} />
                </label>
                <br />
                <label>
                    Description:
                    <input className='form-input' type="text" value={description} onChange={handleDescriptionChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
                <Link to="/"><button>Cancel</button></Link>
            </form>
        </div>
    );
};

export default NewMealEntryForm;