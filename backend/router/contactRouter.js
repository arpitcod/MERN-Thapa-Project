const express = require('express');
const { contactFormController } = require('../controllers/contactController');
const router = express.Router();



router.post('/contact',contactFormController)


module.exports= router;