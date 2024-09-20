const express = require('express');
const { contactFormController } = require('../controllers/contactController');
const router = express.Router();



//post contact form data http://localhost:2024/api/form/contact
router.post('/contact',contactFormController)


module.exports= router;