
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import homeRouter from "./routes/homeRouter.js"

dotenv.config()
const app = express();
const port = process.env.PORT || 4000
const url = process.env.DB_URL

app.use(cors());
app.use(express.json());

mongoose.connect(url)
    .then(() => {
        console.log("connected to database");
        app.listen(port, () => console.log(`http://localhost:${port}`))
    })
    .catch((error) => {
        console.log("error => ", error);
    })

app.use("/products", homeRouter);
