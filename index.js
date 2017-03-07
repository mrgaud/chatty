const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

const messages = [];

app.use(express.static('assets'))
app.use(bodyParser.json())

app.get('/messages', function(req, res) {
    res.status(200).json({
        messages: messages
    });
})
app.post('/messages', function(req, res) {
    messages.push({
        image:req.body.image,
        user:req.body.user,
        message: req.body.message,
        time: new Date()
    })
    res.status(201).json(messages)
})

app.listen(port, function() {
    console.log(`checkout port:${port}`);
})
