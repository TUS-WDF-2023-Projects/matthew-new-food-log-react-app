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
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Meal</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Price</th>
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
                            <td>
                                <Link to={`/meals/${item.id}`}><button>View</button></Link>
                                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
};

export default MealEntries;