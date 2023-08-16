import React from 'react';
import { useParams } from 'react-router-dom';

const SingleMealEntry = ({ meals }) => {

    // const urlParameters = useParams();
    const { id } = useParams();

    // let mealToDisplay = meals.find((item) => (
    //     item.id === Number(urlParameters.mealID)
    // ));
    const selectedMeal = meals.find(item => item.id === Number(id));

    return (
        <div>
            <h2>Meal Details</h2>
            {selectedMeal.meal} Contains...<br />
            Date: {selectedMeal.date} <br />
            Time: {selectedMeal.time} <br />
            Price: {selectedMeal.price}<br />
        </div>
    )

};

export default SingleMealEntry;