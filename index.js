import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./config/dbConfig.js";
import todoRoutes from "./routes/todoRoutes.js";


dbConnect();

const app = express();
dotenv.config();
app.use(express.json());

app.use('/api/todoList',todoRoutes)

app.get('/get',(req,res)=>{
                res.send("Working You Can Get")
})


app.listen(process.env.PORT || 4000, () => {
                console.log(`App is listening on port ${process.env.PORT}`);
                
})






