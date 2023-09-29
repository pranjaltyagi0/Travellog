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
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' })); // Adjust the limit as needed

mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true })
const db= mongoose.connection;
db.on('error',(error)=> console.error(error));
app.use(express.json())

//setting up the authRoutes(Login,SignUp)
const userRoutes = require('./routes/authRoutes')
app.use('/api',userRoutes);

const uploadRoutes = require('./routes/uploadroutes');
// const upload = require('./controllers/uploadcontroller');
app.use('/upload',uploadRoutes);

app.get('/',(req,res)=>{
    res.send("<h1>Hello</h1>")
    res.end();
})
const port= process.env.port|| 3000;
console.log(process.env.port)
app.listen(process.env.port,()=>{
})

