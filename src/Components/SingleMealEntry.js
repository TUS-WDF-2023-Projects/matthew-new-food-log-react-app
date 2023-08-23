import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// This function displays a single meal entry based on a URL Parameter. It uses the 'useParams' hook
const SingleMealEntry = ({ meals, onUpdate }) => {

    const { id } = useParams();

    // This code uses the 'find' method to locate a meal object within the array of meal entries
    const selectedMeal = meals.find(item => item.id === Number(id));

    const [editing, setEditing] = useState(false);
    const [editedMeal, setEditedMeal] = useState(selectedMeal);

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedMeal((prevMeal) => ({ ...prevMeal, [name]: value }));
    };

    const handleUpdateClick = () => {
        // Call the onUpdate function to update the meal
        onUpdate(editedMeal);

        setEditing(false);
    };

    return (
        <div>
            <h2 className='centered-heading'>Meal Details</h2>
            {editing ? (
                <div className='entry-details'>
                    <form>
                        <div>
                            <label>Meal: </label><br />
                            <select className='form-input' value={editedMeal.meal} onChange={handleInputChange}>
                                <option value="">Select A Meal</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Snack">Snack</option>
                                <option value="Breakfast">Dinner</option>
                            </select>
                        </div>
                        <div>
                            <label>Date: </label><br />
                            <input className='form-input'
                                type="text"
                                name="date"
                                value={editedMeal.date}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Time: </label><br />
                            <input className='form-input'
                                type="text"
                                name="time"
                                value={editedMeal.time}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Price: </label><br />
                            <input className='form-input'
                                type="text"
                                name="price"
                                value={editedMeal.price}
                                onChange={handleInputChange}
                            />
                            <br />
                            <label>Description: </label><br />
                            <input type="text" className='form-input'
                                name="description"
                                value={editedMeal.description}
                                onChange={handleInputChange}
                            />
                        </div><br />
                        <button className='btn btn-primary' onClick={handleUpdateClick}>Update</button>
                        <Link to={"/"}><button className='btn btn-dark'>Cancel</button></Link>
                    </form>
                </div>
            ) : (
                <div>
                    <p>Meal: {selectedMeal.meal}</p>
                    <p>Date: {selectedMeal.date}</p>
                    <p>Time: {selectedMeal.time}</p>
                    <p>Price: {selectedMeal.price}</p>
                    <p>Description : {selectedMeal.description}</p>
                    <button className='btn btn-primary' onClick={handleEditClick}>Edit</button><br />
                    <Link to="/"><button className='btn btn-dark'>Back to Food Log</button></Link>
                </div>
            )}
        </div>
    );
};

export default SingleMealEntry;