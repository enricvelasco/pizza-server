const express = require('express');
const auth = express.Router();

const AuthController = require('../controllers/auth.controller')

auth.post('/auth', AuthController.post)

module.exports = auth;
