import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const SingleMealEntry = ({ meals, onUpdate }) => {

    const { id } = useParams();

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
        <div className='entry-details'>
            <h2 className='centered-heading'>Meal Details</h2>
            {editing ? (
                <div>
                    <form>
                        <div>
                            <label>Meal: </label>
                            <select value={editedMeal.meal} onChange={handleInputChange}>
                                <option value="">Select A Meal</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Snack">Snack</option>
                                <option value="Breakfast">Dinner</option>
                            </select>
                        </div>
                        <div>
                            <label>Date: </label>
                            <input
                                type="text"
                                name="date"
                                value={editedMeal.date}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Time: </label>
                            <input
                                type="text"
                                name="time"
                                value={editedMeal.time}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Price: </label>
                            <input
                                type="text"
                                name="price"
                                value={editedMeal.price}
                                onChange={handleInputChange}
                            />
                            <br />
                            <label>Description: </label>
                            <input type="text"
                                name="meal-outline"
                                value={editedMeal.description}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button onClick={handleUpdateClick}>Update</button>
                        <Link to={"/"}><button>Cancel</button></Link>
                    </form>
                </div>
            ) : (
                <div>
                    <p>{selectedMeal.meal}</p>
                    <p>Date: {selectedMeal.date}</p>
                    <p>Time: {selectedMeal.time}</p>
                    <p>Price: {selectedMeal.price}</p>
                    <p>Description : {selectedMeal.description}</p>
                    <button onClick={handleEditClick}>Edit</button>
                    <Link to="/"><button>Back to Food Log</button></Link>
                </div>
            )}
        </div>
    );
};

export default SingleMealEntry;