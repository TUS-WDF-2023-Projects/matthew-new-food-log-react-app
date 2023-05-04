import React, { Fragment } from 'react';
import Meals from './Meals';
import { Link, useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
// Created a function called 'Home' 
function Home() {

    let history = useNavigate();

    // Created a const function called 'handleEdit'. The 'localStorage' object is used to store the values of 'Meal', 'Time' and 'Date'. 
    const handleEdit = (id, meal, time, date) => {
        localStorage.setItem('Meal', meal);
        localStorage.setItem('Date', date);
        localStorage.setItem('Time', time);

    }

    // Created a const function called 'handleDelete'. It used the '.map' method to create a new array of 'id' values from the 'meals' array.
    const handleDelete = (id) => {
        var index = Meals.map(function (e) {
            return e.id
        }).indexOf(id);

        Meals.splice(index, 1);

        history('/');
    }

    // Fragment is a feature that allows you to return multiple elements from a React Component by allowing you to group a list of children without adding extra nodes to the DOM. 

    return (

        <Fragment>
            <main>
                <Table className='mt-4' striped variant='dark'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Meal</th>
                            <th>Time</th>
                            <th>Date</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Meals.map((item) => {
                                return (
                                    <tr>
                                        <td><Link to="breakfast">{item.id}</Link></td>
                                        <td><Link to="breakfast">{item.meal}</Link></td>
                                        <td>{item.time}</td>
                                        <td>{item.date}</td>
                                        <td><Link to="/edit"><button id="edit-button" onClick={() => handleEdit(item.id, item.meal, item.time, item.date)}>Edit</button></Link></td>
                                        <td><button id="delete-button" onClick={() => handleDelete(item.id)}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <br />
                <Link to="/newEntry"><button id="new-entry-button">Add New Entry</button></Link>
            </main>
        </Fragment>
    )
}

export default Home;