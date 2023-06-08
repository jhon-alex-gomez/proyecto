
const express = require('express');
const controller = require('../controllers/Datos');
const Datos = require('../models/Datos');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());

const path = '/home';

router.get(path, controller.getData);
//router.get('/datos', controller.getData);
//router.post('/datos', controller.insertData);


module.exports = router;