const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.post('/login',(req,res)=>{
    res.send(req.body);
})

app.listen(5000,()=>{
    console.log('Server Running');
})