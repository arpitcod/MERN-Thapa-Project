const express = require('express');
const { registerController, loginController, getUserController } = require('../controllers/authController');
const validate = require('../middleware/validateMiddleware');
const signupSchema = require('../validators/authValidator');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();



//register http://localhost:2024/api/auth/register
router.post('/register',validate(signupSchema), registerController)

//login http://localhost:2024/api/auth/login
router.post('/login',loginController)


//get user  http://localhost:2024/api/auth/get-user
router.get('/get-user',authMiddleware,getUserController)


module.exports = router;