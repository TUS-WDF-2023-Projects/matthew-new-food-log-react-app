import React, { useState } from 'react';

const NewMealEntryForm = ({ onSave }) => {
    const [meal, setMeal] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');

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
        onSave({ meal, time, date, price });

        // Reset fields

        setMeal('');
        setDate('');
        setTime('');
        setPrice('');
    };

    return (
        <div>
            <h2>New Meal Entry Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Meal:
                    <input type="text" value={meal} onChange={handleMealChange} />
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
            </form>
        </div>
    );
};

export default NewMealEntryForm;