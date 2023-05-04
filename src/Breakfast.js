import React, { useState } from 'react'
import { Table } from 'react-bootstrap';
import MealEdit from './MealEdit';

// Created a function called 'Breakfast'. This function uses the 'useState' hook to declare a state variable called 'data'.
const Breakfast = () => {

    const [data, setData] = useState([

        { id: 1, fruit: "Apple", grains: "Oatmeal", drink: "Coffee" },
        { id: 2, fruit: "Banana", grains: "Porridge", drink: "Tea" },

    ]);

    // Created a state variable called 'editItem' to keep track of an item that needs to be edited. This code also contains a function called 'handleEdit' to update the state variable. 
    const [editItem, setEditItem] = useState(null);

    const handleEdit = (item) => {
        setEditItem(item);
    };

    // This code is used to update an item in a collection of data and trigger a re-rendering with the updated data.
    const handleUpdate = (id, updateItem) => {
        setData(data.map((item) => (item.id === id ? updateItem : item)));
        setEditItem(null);
    };


    return (
        <div class="container-header">
            <h2> Today's Breakfast</h2><br />
            <Table stripped variant='dark' className='breakfast-menu'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fruit</th>
                        <th>Grains</th>
                        <th>Drink</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.fruit}</td>
                            <td>{item.grains}</td>
                            <td>{item.drink}</td>
                            <td>
                                <button id="edit-button" onClick={() => handleEdit(item)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {editItem && (
                <MealEdit item={editItem} onUpdate={handleUpdate} onCancel={() => setEditItem(null)} />
            )}
        </div>
    );
};

export default Breakfast;