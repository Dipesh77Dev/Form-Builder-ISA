require('dotenv').config();

const express = require('express');

const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.Port;

const connectDB = require('./config/db.config');

const userRegisterRouter = require('./routes/user.routes');
const quizTypeRegisterRouter = require('./routes/quizType.routes');
const quizCreateRegisterRouter = require('./routes/quizCreate.routes');
const formRouter = require('./routes/form.router');
const questionRouter = require('./routes/question.routes');


app.get('/', (req, res) => {
    res.send('Testing')
});

app.use('/api/user', userRegisterRouter);
app.use('/api/quizType', quizTypeRegisterRouter);
app.use('/api/quizCreate', quizCreateRegisterRouter);
app.use('/api/form', formRouter);
app.use('/api/question', questionRouter);


app.listen(PORT, () => {
    connectDB();
    console.log(`Your Backend had been connected & Listening on PORT - ${PORT}`);
});

