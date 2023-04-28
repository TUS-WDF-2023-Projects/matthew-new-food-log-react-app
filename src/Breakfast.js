import React from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Breakfast = () => {
    return (
        <div class="container-header">
            <h2> Today's Breakfast</h2><br />
            <Table stripped variant='dark' className='breakfast-menu'>
                <thead>
                    <tr>
                        <th>Fruit</th>
                        <th>Grains</th>
                        <th>Drink</th>
                    </tr>
                </thead>
                <tbody>
                    <td>Banana</td>
                    <td>Toast</td>
                    <td>Orange Juice</td>
                </tbody>
            </Table>
            <td><Link to="/mealedit"><button id="edit-button">Edit Meal</button></Link></td>
        </div>
    )
}

export default Breakfast;