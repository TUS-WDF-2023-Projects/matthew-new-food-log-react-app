import React, { useState } from 'react';


const MealEdit = () => {
    return (
        <form>
            <label>Fruit</label>
            <input type="text" name="fruit" placeholder="Enter Fruit"></input><br />
            <label>Grains</label>
            <input type="text" name="grains" placeholder="Enter Grains"></input><br />
            <label>Drink</label>
            <input type="text" name="drink" placeholder="Enter Drink"></input><br />
            <button type="button">Update</button>
        </form>

    )
}

export default MealEdit



