import dictionary from './dictionary.js'
import express from "express";

const app = express();

const validWordle = dictionary.filter(word => word.length === 5)

app.get("/validWordle", (req, res)=>{
  res.status(200).send(validWordle[Math.floor(Math.random() * validWordle.length)]);
});

app.listen(3777, () => console.log(`Server is listening on port 3777`));