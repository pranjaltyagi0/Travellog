const dotenv = require('dotenv');
dotenv.config(); // Importing the environment variables
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(
    cors({
        origin: "*",
    })
);
const uri = "mongodb+srv://pranjal:pranjal@cluster0.9b1nmhi.mongodb.net/?retryWrites=true&w=majority";

const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' })); // Adjust the limit as needed

mongoose.connect(uri, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
app.use(express.json());

// Setting up the authRoutes (Login, SignUp)
const userRoutes = require('./routes/authRoutes');
app.use('/api', userRoutes);

const uploadRoutes = require('./routes/uploadroutes');
app.use('/upload', uploadRoutes);

app.get('/', (req, res) => {
    res.send("<h1>Hello</h1>");
    res.end();
});

const port = process.env.PORT || 3000;
console.log(process.env.PORT);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
