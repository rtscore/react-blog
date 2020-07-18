const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbuser:qwerty123@react-blog.8y8sr.mongodb.net/<dbname>?retryWrites=true&w=majority', 
    {userNewUrlParser: true}).then(() => console.log('DB Connected'))
                            .catch(err => console.error(err));



app.get('/', (req, res) => {
    res.send('hello world')
});



app.listen(5000);