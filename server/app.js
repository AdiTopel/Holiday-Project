const express = require('express');
const static = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoute');
const globalErrorHandler = require('./controllers/globalErrorHandler')
const app = express();
const cors = require('cors');


app.use(static("public"));
app.use(bodyParser.json());
app.use(cors());


app.use('/user', userRouter);

app.use(globalErrorHandler);

module.exports = app;