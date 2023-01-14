// // require('dotenv').config();

const express = require('express');
const cors = require('cors');
// // const mongoose = require('mongoose');

const app = express();

// // var corsOptions = {
// //     origin: "http://localhost:3000"
// // };
// // app.use(cors(corsOptions));

const PORT = process.env.PORT || 8080;
// // const db = process.env.DB;

// // require('./config.js/user.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// // mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
// //   console.log('Connected to MongoDB')
// // );

// // const testCreation = async () => {
// //   const newUser = new NewUser({
// //     name: 'test',
// //     email: 'test@test.com',
// //     password: 'test',
// //   });
// //   await newUser.save().then((res) => console.log('saved user', res));
// //   const query = await NewUser.find();
// //   console.log(query);
// // };

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// // const Routes = require('./routes/user.routes');
// // Routes(app);
