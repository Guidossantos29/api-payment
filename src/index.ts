import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import bodyParser from "body-parser";
import swaggerUi from 'swagger-ui-express'; 
import swaggerDefinition from "./config/swagger";
import paymentRoutes from "./routes/paymentRoutes";
import authRoutes from "./routes/authRoutes";

dotenv.config();
console.log("JWT_SECRET:", process.env.JWT_SECRET);


const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition));

app.use('/api', paymentRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
