const express = require('express');
const {randomBytes} = require('crypto');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

const commentsByPostsId = {};

app.get('/posts/:id/comments', (req, res) => {
  
    res.send(commentsByPostsId[req.params.id] || [] );
})

app.post('/posts/:id/comments', (req, res) => {
    const comentsId = randomBytes(4).toString('hex');
    const {content} = req.body; 
   const comments = commentsByPostsId[req.params.id] || []

   comments.push({id: comentsId, content})
   commentsByPostsId[req.params.id] = comments;
    res.status(201).send(comments)

})

app.listen(4001, (req, res) => {
console.log('listening on 4001') 

})
