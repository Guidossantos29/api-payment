import express from "express";
import dotenv from 'dotenv';
import cors from "cors"
import bodyParser from "body-parser";

dotenv.config();

const app = express()

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT,() => {
    console.log("servidor rodando");
    
});
