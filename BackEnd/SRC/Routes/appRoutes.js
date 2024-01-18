import connectDB from "../../DB/connection.js";
import insertDummyData from "../../DB/dummyData.js";
import customerRoutes from "../Routes/customerRoutes.js"
import transferRoutes from "../Routes/transferRoutes.js"
import { globalErrorHandling } from "../Utils/errorHandling.js";
import cors from 'cors'
const initApp = (app, express) => {
    app.use(express.json());
    app.use(cors());
    connectDB();
    // insertDummyData()
    app.get('/', (req, res) => res.json({ message: "Welcome to R-Sparks Banking System" }))
    app.use('/customer', customerRoutes);
    app.use('/transfer', transferRoutes);
    app.get('*', (req, res) => res.json({ message: "Page Not Found" }))
    app.use(globalErrorHandling);
};
export default initApp;
