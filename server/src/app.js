const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const { port, DB_User, DB_Password } = require('./config/config');
const DB_URL = `mongodb://${DB_User}:${DB_Password}@ds119996.mlab.com:19996/express-vue-todo-app`;
const todoRoutes = require('./routes/todos');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.use(todoRoutes);

mongoose.connect(DB_URL, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

// Handle Production
if (process.env.NODE_ENV === 'production') {
    //Static folder
    app.use(express.static(__dirname + '/client/public'));

    //Handle SPA
    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/client/public/index.html');
    })
}

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
});