import React from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

// This is a functional component that uses the 'handleDelete' function to handle the deletion of an entry 
const MealEntries = ({ meals, onDelete }) => {
    const handleDelete = (e) => {
        onDelete(Number(e.target.value));
    };

    return (
        <div className="text-center">
            <h1>Matthew's Food Log</h1><br />
            <Table className="table-component table-responsive" striped bordered>
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
                            <td className="col-1 col-sm-1 col-md-1">{item.id}</td>
                            <td className="col-2 col-sm-2 col-md-2">{item.meal}</td>
                            <td className="col-2 col-sm-2 col-md-2">{item.date}</td>
                            <td className="col-2 col-sm-1 col-md-1">{item.time}</td>
                            <td className="col-1 col-sm-1 col-md-1">{item.price}</td>
                            <td className="col-3 col-sm-3 col-md-3">{item.description}</td>
                            <td className="col-3 col-sm-3 col-md-2">
                                <div className="btn-container">
                                    <Link to={`/SingleMealEntry/${item.id}`}><button className="btn btn-sm btn-primary" style={{ margin: '0 10px', display: 'inline-block' }}>View</button></Link>
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