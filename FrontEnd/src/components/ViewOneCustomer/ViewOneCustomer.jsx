import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { getCustomerById } from '../../api/customerApi.js';
import { Link, useParams } from 'react-router-dom';

const ViewOneCustomer = () => {
    const [receiver, setReceiver] = useState([]);
    const { receiverId } = useParams();
    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const receiver = await getCustomerById(receiverId);
                setReceiver(receiver.customer);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCustomer();
    }, []);
    return (
        <div>
            <div className="background-container"></div>
            <div className='content-container'>
                <h2>{receiver.name } Details: </h2>
                <Table striped className='oneCustomer' >
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Customer Email</th>
                            <th>Customer Account Number</th>
                            <th>Customer Current Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{ receiver.name } </td>
                            <td>{ receiver.email } </td>
                            <td>{ receiver.accountNumber } </td>
                            <td>{ receiver.currentBalance } </td>
                        </tr>
                        <tr>
                            <td colSpan="4">
                                <Link to={ `/transferForm/${receiver._id}` }>
                                    <Button className='customerButton' variant="warning">Transfer</Button>
                                </Link>
                            </td>
                        </tr>

                    </tbody>
                    <div>

                    </div>
                </Table>
            </div>
        </div>
    );
};
export default ViewOneCustomer;
