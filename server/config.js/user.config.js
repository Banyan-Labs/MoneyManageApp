require("dotenv").config();

const mongoose = require('mongoose');
const db = "money-Managed-Project"

mongoose
  .connect(process.env.DB, {
    //   .connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Established connection with db - ${db}`))
  .catch((err) => console.log(err));
