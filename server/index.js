const { dictionary } = require('./dictionary.js')
const express = require("express")
const cors = require('cors')

const app = express();
app.use(cors())

const validWordle = dictionary.filter(word => word.length === 5)

app.get("/validWordle", (req, res)=>{
  res.status(200).send(validWordle[Math.floor(Math.random() * validWordle.length)]);
});

app.get("/realWord", (req, res)=>{
  res.status(200).send(validWordle.includes(req.query.word));
});

app.listen(3777, () => console.log(`Server is listening on port 3777`));