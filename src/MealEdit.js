import React, { useState } from "react";
import Form from "react-bootstrap/Form";


// This code is used to edit a 'Meal' item. When 'onUpdate' is called it will be passed the 'uopdatedItem' which is then used to update the origional 'Item'.
const MealEdit = ({ item, onUpdate, onCancel }) => {
    const [updatedItem, setUpdatedItem] = useState(item);

    // This code is used to handle changes to input elements in a form and updates the state of the component. 
    const handleChange = (e) => {
        setUpdatedItem({ ...updatedItem, [e.target.name]: e.target.value });
    };

    // Created a function called 'handleSubmit' which is used as an event handler for a form submission.
    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(item.id, updatedItem);
    };

    return (
        <Form className="mb-3" onSubmit={handleSubmit}>
            <label htmlFor="id">ID:</label><br />
            <input type="number" id="id" name="id" value={updatedItem.id} onChange={handleChange} />
            <br />
            <label htmlFor="fruit">Fruit:</label><br />
            <select id="fruit" name="fruit" value={updatedItem.fruit} onChange={handleChange}>
                <option>Apple</option>
                <option>Orange</option>
                <option>Banana</option>
                <option>Strawberries</option>
                <option>Watermelon</option>
                <option>Kiwi</option>
            </select>
            <br />
            <label htmlFor="grains">Grains:</label><br />
            <select id="grains" name="grains" value={updatedItem.grains} onChange={handleChange}>
                <option>Quinoa</option>
                <option>Amaranth</option>
                <option>Kamut</option>
                <option>Millet</option>
                <option>Buckwheat</option>
            </select>
            <br />
            <label htmlFor="drink">Drink:</label><br />
            <select id="drink" name="drink" value={updatedItem.drink} onChange={handleChange}>
                <option>Tea</option>
                <option>Coffee</option>
                <option>Orange Juice</option>
                <option>Smoothie</option>
                <option>Water</option>
            </select>
            <br /><br />
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </Form>
    );
};

export default MealEdit;




