const express = require('express');
const router = express.Router();
const messages = [];

console.log(router,4);

router.get('/', function(req, res) {
    res.status(200).json({
        messages: messages
    });
})
router.post('/', function(req, res) {
    messages.push({
        image:req.body.image,
        user:req.body.user,
        message: req.body.message,
        time: new Date()
    })
    res.status(201).json(messages)
})


module.exports = router
