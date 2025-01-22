import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import bodyParser from "body-parser";
import swaggerUi from 'swagger-ui-express'; 
import swaggerDefinition from "./config/swagger";
import paymentRoutes from "./routes/paymentRoutes";
 

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition));


app.use('/api/', paymentRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
