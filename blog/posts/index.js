const express = require('express');
const {randomBytes} = require('crypto');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json())
app.use(cors())

const posts = {};
app.get('/', (req, res) => {
    res.send('/')

})

app.get('/posts', (req, res) => {
  
    res.send(posts);
})

app.post('/posts', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const {title} = req.body; 

    posts[id] = {
        id, 
        title
    }
    await axios.post('http://localhost:4005/events', {
        type: 'postCreated',
        data:{
            id, title
        }
    } )


    res.status(201).send(posts[id])

})

app.listen(4000, (req, res) => {
console.log('listening on 4000') 

})