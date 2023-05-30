const express = require('express');
const app = express();
const userRoute = require('./Routes/user.route');

app.get('/', (req, res) => {
    res.send('hello world')
});

app.use('/api/v1/newpost', userRoute)
module.exports = app;