const handleErrors = require('./middleware/handleErrors');
const express = require('express'),
    app = express(),
    port = process.env.PORT || 4000,
    bodyParser = require('body-parser'),
    controller = require('./controller.js');

const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes');
routes(app);
app.use(handleErrors);
app.listen(port);
console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port); 
