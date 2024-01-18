import mongoose from 'mongoose';
import customerModel from "./Models/customerModel.js";

const customersData = [
    { name: 'John Doe', accountNumber:123123, email: 'john@example.com', currentBalance: 5000 },
    { name: 'Joseph Rice', accountNumber:124124, email: 'josephrice@example.com', currentBalance: 6500 },
    { name: 'Alisa Lane', accountNumber:125125, email: 'alisalane@example.com', currentBalance: 4500 },
    { name: 'Yen Sutton', accountNumber:126126, email: 'yensutton@example.com', currentBalance: 7000 },
    { name: 'Warren Hebert', accountNumber:127127, email: 'warrenhebert@example.com', currentBalance: 5500 },
    { name: 'Athena Hebert', accountNumber:128128, email: 'athenahebert@example.com', currentBalance: 4300 },
    { name: 'Tanya Mosley', accountNumber:129129, email: 'tanyamosley@example.com', currentBalance: 3500 },
    { name: 'Yen Hebert', accountNumber:121121, email: 'yenhebert@example.com', currentBalance: 8500 },
    { name: 'Alisa Hebert', accountNumber:122122, email: 'alisahebert@example.com', currentBalance: 4500 },
    { name: 'Warren Sutton', accountNumber:112112, email: 'warrensutton@example.com', currentBalance: 4000 },
    { name: 'Tanya Hebert', accountNumber:113113, email: 'tanyahebert@example.com', currentBalance: 6000 },
    { name: 'Athena Hebert', accountNumber:114114, email: 'Athenahebert@example.com', currentBalance: 5500 },
    { name: 'Warren Lane', accountNumber:116116, email: 'warrenLane@example.com', currentBalance: 4500 },
];

const insertDummyData = async () => {
    try {
        await customerModel.insertMany(customersData);
        console.log('Dummy data inserted successfully.');
    } catch (error) {
        console.error('Error inserting dummy data:', error.message);
    } finally {
        mongoose.connection.close();
    }
};
export default insertDummyData;
