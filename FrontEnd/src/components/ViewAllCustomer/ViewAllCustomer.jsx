import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { getAllCustomers } from '../../api/customerApi.js';
import { Link } from 'react-router-dom';

const ViewAllCustomer = () => {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const customers = await getAllCustomers();
                setCustomers(customers.customers);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCustomers();
    }, []);
    return (
        <div>
            <div className='content-container'>
                    <h2>All Our Customer </h2>
                <Table striped bordered hover className='mytable'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Account Number</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { customers.map((customer) => (
                            <tr>
                                <td>{ customer.name }</td>
                                <td>{ customer.accountNumber }</td>
                                    <td>
                                <Link to ={`/customer/${customer._id}`}>
                                        <Button variant="warning">View Details</Button>
                                </Link>
                                    </td>
                            </tr>
                        )) }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};
export default ViewAllCustomer;
