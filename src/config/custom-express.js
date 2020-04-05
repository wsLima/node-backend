require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();

const requets = require('../app/providers/requests');
requets(app);

module.exports = app;