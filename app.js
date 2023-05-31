const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json())
const userRoute = require('./Routes/user.route');


app.get('/', (req, res) => {
    res.send('hello world')
});

app.use('/api/v1', userRoute)
module.exports = app;