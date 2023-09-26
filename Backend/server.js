const dotenv=require('dotenv')
dotenv.config(); //importing the environment variables
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const cors =  require('cors');
app.use(
    cors({
        origin:"*",
    })
)
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true })
const db= mongoose.connection;
db.on('error',(error)=> console.error(error));
db.once('open',()=> console.log("Connected to Database"))
app.use(express.json())

//setting up the authRoutes(Login,SignUp)
const userRoutes = require('./routes/authRoutes')
app.use('/api',userRoutes);

app.get('/',(req,res)=>{
    res.send("<h1>Hello</h1>")
    res.end();
})
console.log(process.env.port)
app.listen(process.env.port,()=>{
    console.log("first")
})

