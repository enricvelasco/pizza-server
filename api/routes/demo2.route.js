const express = require('express');
const demo2router = express.Router();

const Demo2Controller = require('../controllers/demo2.controller')

demo2router.get('/demo', Demo2Controller.get)

module.exports = demo2router;
