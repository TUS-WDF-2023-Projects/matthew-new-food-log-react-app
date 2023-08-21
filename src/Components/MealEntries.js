import React from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

const MealEntries = ({ meals, onDelete }) => {
    const handleDelete = (e) => {
        onDelete(Number(e.target.value));
    };

    return (
        <div className="text-center">
            <h1>Matthew's Food Log</h1><br />
            <Table className="table-component" striped bordered>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Meal</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {meals.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.meal}</td>
                            <td>{item.date}</td>
                            <td>{item.time}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>
                                <div className="btn-container">
                                    <Link to={`/SingleMealEntry/${item.id}`}><button className="btn btn-sm btn-primary">View</button></Link>
                                    <button className="btn btn-sm btn-danger" onClick={() => onDelete(item.id)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Link to="/NewMealEntryForm"><button className="btn btn-sm btn-success">Add New Entry</button></Link>
        </div>
    )
};

export default MealEntries;