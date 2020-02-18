const os = require('os');
const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT || 4200;
const DB_CONNECTION_URL = process.env.DB_CONNECTION;
const bodyParser = require('body-parser');

//console.log( DB_CONNECTION_URL );
app.use(bodyParser.json());
//Routes
const postsRoutes = require('./routes/posts');
const apiRoutes = require('./routes/api');


app.use('/posts',postsRoutes);
app.use('/api',apiRoutes);


app.get("/", (req,res) => {
  res.send({ username: os.userInfo().username });
});


mongoose.connect(DB_CONNECTION_URL, { useNewUrlParser: true },() => {
  console.log("Connected to DB");
});


/**
 * serve react app
 */
// app.use(express.static('dist'));
// app.get('*', (req, res) =>
//   res.sendFile(path.resolve(__dirname, 'dist/index.html'))
// );


/**
 * production mode
 */
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.resolve(__dirname, 'dist')));
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'dist/index.html'))
  );
}

/**
 * start the server
 */
app.listen(port, () => console.log('Listening on port 4200!'));
