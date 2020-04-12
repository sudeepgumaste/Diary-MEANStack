import express from "express";
import dotenv from "dotenv";
import process from "process";
import { router } from "./router";
import cors from "cors";
import mongoose from "mongoose";
import morgan from 'morgan';
import fs from 'fs';

//configuring environment
dotenv.config();
//create express app
const app = express();

app.use(cors());
app.use(morgan('combined', {stream: fs.createWriteStream('./logs/requests.log', {flags: 'a'})}))
app.use(morgan('combined'))

//db connection
mongoose.connect(
  process.env.DB_URI,
  {  
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify : false
  },
  () => {
    console.log("Connected to DB");
  },
);

//middlewares
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
