const express = require('express');
const {signup, login, alldata,deletealldata} = require('../controllers/authcontrollers')
const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.get('/',alldata);
router.delete('/deleteall',deletealldata)
module.exports=router;