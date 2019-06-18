const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    { id: 'asfdasfdas',
    title: 'First',
    content: 'Coming frm server!'},
    { id: 'xcvbnklkjhgb',
    title: 'Second',
    content: 'Coming frm server!'}
  ];
  res.json({
    message: 'Posts fetched Succesfully',
    posts: posts
  });
});



module.exports = app;
