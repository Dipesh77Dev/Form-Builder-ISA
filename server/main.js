require('dotenv').config();

const express = require('express');

const app = express();

const PORT = process.env.Port; 

app.use = (express.json());

app.get('/', (req, res) =>{
    res.send('Testing')
});

app.listen( PORT, () => {
    console.log(`Your Backend had been connected & Listrning on PORT - ${PORT}`);
});

