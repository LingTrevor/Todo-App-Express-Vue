const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { port, DB_User, DB_Password } = require('./config/config');
const DB_URL = `mongodb://${DB_User}:${DB_Password}@ds119996.mlab.com:19996/express-vue-todo-app`;

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(DB_URL)
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err))

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})