const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authorRoute = require("./routes/author");
const bookRoute = require("./routes/book");
const port = 8000; 
dotenv.config(); 
//Connect Database: 
mongoose.connect((process.env.MONGODB_URL),()=>{
    console.log("Connected to MongoDB ...");
});


app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));

app.get("/", (req,res) =>{
    res.status(200).json("Hello");
});

app.use("/v1/author",authorRoute);
app.use("/v1/book",bookRoute);

app.listen(port, () =>{
    console.log("Server is running at port ",{port});
});

