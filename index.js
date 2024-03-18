const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const PORT = 3000;

const distanceRouter = require('./routers/distance.router')

app.use('/api',distanceRouter)


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})