const express = require('express');
const {randomBytes} = require('crypto');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

const posts = {};
app.get('/', (req, res) => {
    res.send('/')

})

app.get('/posts', (req, res) => {
  
    res.send(posts);
})

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const {title} = req.body; 

    posts[id] = {
        id, title
    }


    res.status(201).send(posts[id])

})

app.listen(4000, (req, res) => {
console.log('listening on 4000') 

})