// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const registerUser = require('../controllers/userRegistration');
const upload = require('../middleware/uploadMiddleware');
const loginUser=require('../controllers/userLogin') 
const searchFriend=require('../controllers/searchFriend')

router.post('/register', upload.single('profileImage'), registerUser);
router.post('/login',loginUser)
router.get('/search',searchFriend)
module.exports = router;

