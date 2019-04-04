const express = require('express');
const app = express();
const mongoose = require('mongoose'); 
const Task = require('./models/todoListModel');
const Tasktwo = require('./models/todoListTwoModel')
const bodyparser = require('body-parser');
require("dotenv").config();

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb');
mongoose.connect(process.env.mongourl);
 
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

var routes = require('./routers/todoListRoutes'); //importing route
routes(app); //register the route

app.listen(3001, () => {
    console.log("http//:localhost:3001");
    
})