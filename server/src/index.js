const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;
const NODE_ENV = !process.env.NODE_ENV ? 'development' : process.env.NODE_ENV;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
  res.send('Hello World!');
  res.end();
});

app.listen(PORT, () => {
  console.log(`application running in ${NODE_ENV} mode on port ${PORT}`);
});
