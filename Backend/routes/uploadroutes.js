const express = require('express');
const router = express.Router();
const {uploadImage,alldata,deletealldata}=require('../controllers/uploadcontroller');


router.post('/user',uploadImage);
router.get('/user',alldata);
router.delete('/user',deletealldata)

module.exports=router;