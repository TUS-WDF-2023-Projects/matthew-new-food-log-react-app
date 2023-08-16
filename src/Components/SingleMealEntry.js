import React from 'react';
import { useParams } from 'react-router-dom';

const SingleMealEntry = ({ meals }) => {

    const urlParameters = useParams();

    let mealToDisplay = meals.find((item) => (
        item.id === Number(urlParameters.mealID)
    ));

    return (
        <div>
            {mealToDisplay.meal} Contains...<br />
            Date: {mealToDisplay.date} <br />
            Time: {mealToDisplay.time} <br />
            Price: {mealToDisplay.price}<br />
        </div>
    )

};

export default SingleMealEntry;