const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { port } = require('./config/config');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})