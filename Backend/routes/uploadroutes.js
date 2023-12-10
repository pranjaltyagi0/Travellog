const express = require('express');
const router = express.Router();
const {uploadImage,alldata,deletealldata, allUserImages, getImage}=require('../controllers/uploadcontroller');


router.post('/user',uploadImage);
router.get('/user',alldata);
router.post('/alluserimg',allUserImages);
router.delete('/user',deletealldata)


module.exports=router;