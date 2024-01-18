import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams} from 'react-router-dom';
import { createTransferProcess } from '../../api/transferApi.js';
import { getCustomerByAccountNumber, getCustomerById} from '../../api/customerApi.js';
import Swal from 'sweetalert2';

const TransferForm = () => {
    const [senderNumber, setSenderNumber] = useState('');
    const [amount, setAmount] = useState('');
    const receiverId = useParams().receiverId;
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(senderNumber)
            const sender = await getCustomerByAccountNumber(senderNumber);
            const transferData = {
                senderId: sender.customer._id,
                receiverId: receiverId,
                amount: amount,
            };
            await createTransferProcess(transferData);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Transfer ${amount} to ${(await getCustomerById(receiverId)).customer.name} successfully`,
                showConfirmButton: false,
                timer: 3500
            });
            setSenderNumber('');
            setAmount('');
        } catch (error) {
            console.error('Error in handleSubmit:', error);
        }        
    };

    return (
        <div>
            <div className="background-container"></div>
            <div className="content-container">
                <Form className="formTransfer" onSubmit={ handleSubmit }>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Account Number</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter account number"
                            value={ senderNumber }
                            onChange={ (e) => setSenderNumber(e.target.value) }
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasic">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Amount"
                            value={ amount }
                            onChange={ (e) => setAmount(e.target.value) }
                        />
                        <Button variant="outline-danger" type="submit">
                            Transfer
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default TransferForm;
