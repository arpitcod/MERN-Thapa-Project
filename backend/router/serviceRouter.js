const express = require('express');
const { serviceController } = require('../controllers/serviceController');

const router = express.Router();



// getting service data  http://localhost:2024/api/service/service-data
router.get('/service-data',serviceController);



module.exports = router;