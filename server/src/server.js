const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes');

const app = express();

const PORT = process.env.PORT || 8080;

const db = process.env.DB;

/**
 * * Server middleware
 * TODO: extract middleware to separate location
 */
// init Cross Origin Resource Sharing
app.use(cors());

// init built in body parser (allows for request body json format)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// init connection to MongoDB cluster
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log('Connected to MongoDB')
);

// applies userRoutes
app.use(userRoutes);

// testing route
// ping '/test' to confirm server is responding
app.get('/test', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

module.exports = app;
