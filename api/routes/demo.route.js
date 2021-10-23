const express = require('express');
const router = express.Router();

const DemoController = require('../controllers/demo.controller')

router.get('/', DemoController.getDemo)

module.exports = router;
