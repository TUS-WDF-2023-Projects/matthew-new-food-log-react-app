import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const SingleMealEntry = ({ meals, onUpdate }) => {

    // const urlParameters = useParams();
    const { id } = useParams();

    // let mealToDisplay = meals.find((item) => (
    //     item.id === Number(urlParameters.mealID)
    // ));
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
            <h2>Meal Details</h2>
            {editing ? (
                <div>
                    <form>
                        <div>
                            <label>Meal: </label>
                            <input
                                type="text"
                                name="meal"
                                value={editedMeal.meal}
                                onChange={handleInputChange}
                            />
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
                        </div>
                        <button onClick={handleUpdateClick}>Update</button>
                        <Link to={"/"}><button>Cancel</button></Link>
                    </form>
                </div>
            ) : (
                <div>
                    <p>{selectedMeal.meal} Contains...</p>
                    <p>Date: {selectedMeal.date}</p>
                    <p>Time: {selectedMeal.time}</p>
                    <p>Price: {selectedMeal.price}</p>
                    <button onClick={handleEditClick}>Edit</button>
                    <Link to="/"><button>Back to List</button></Link>
                </div>
            )}
        </div>
    );
};
// <div>
//     <h2>Meal Details</h2>
//     {selectedMeal.meal} Contains...<br />
//     Date: {selectedMeal.date} <br />
//     Time: {selectedMeal.time} <br />
//     Price: {selectedMeal.price}<br />
// </div>
//     )

// };

export default SingleMealEntry;