const app = require('./app');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fx7wdtj.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('mongoose is connected using atlas');
    })

app.listen(5000, () => {
    console.log('listening to port 5000');
})