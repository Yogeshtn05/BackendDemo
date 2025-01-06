import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/userRoute.js';

const app = express();
app.use(cors());
//bodyParser - middleware for passing json value from backend to database  
app.use(bodyParser.json());
dotenv.config();


app.use('/api',router);


const port=process.env.PORT ||3500;
const M_URL=process.env.MONGO_URL;

mongoose.connect(M_URL).then(()=>{
    console.log('Database connected');
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    });
})





