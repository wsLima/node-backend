require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use('/static', express.static('src/app/public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

const requets = require('../app/providers/requests');
requets(app);

module.exports = app;