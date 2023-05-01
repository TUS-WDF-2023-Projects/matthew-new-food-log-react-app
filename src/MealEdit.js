import React, { useState } from "react";

// This code is used to edit a 'Meal' item. When 'onUpdate' is called it will be passed the 'uopdatedItem' which is then used to update the origional 'Item'.
const MealEdit = ({ item, onUpdate, onCancel }) => {
    const [updatedItem, setUpdatedItem] = useState(item);

    // This code is used to handle changes to input elements in a form. 
    const handleChange = (e) => {
        setUpdatedItem({ ...updatedItem, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(item.id, updatedItem);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="id">ID:</label>
            <input type="number" id="id" name="id" value={updatedItem.id} onChange={handleChange} />
            <br />
            <label htmlFor="fruit">Fruit</label>
            <input type="text" id="fruit" name="fruit" value={updatedItem.fruit} onChange={handleChange} />
            <br />
            <label htmlFor="grains">Grains:</label>
            <input type="text" id="grains" name="grains" value={updatedItem.grains} onChange={handleChange} />
            <br />
            <label htmlFor="drink">Drink:</label>
            <input type="text" id="drink" name="drink" value={updatedItem.drink} onChange={handleChange} />
            <br />
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default MealEdit;




