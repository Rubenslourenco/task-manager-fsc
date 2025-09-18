import express from "express";
import dotenv from "dotenv";
import TaskRouter from "./src/routes/task.route.js";

import connectToDatabase from "./src/database/mongoose.database.js";


dotenv.config();
const app = express();
app.use(express.json());

connectToDatabase();

app.use('/tasks', TaskRouter);

app.listen(3000);