if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  require('dotenv').config();
}
module.exports = {
  NODE_ENV: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
  MONGO_URI: process.env.MONGO_URI
    ? process.env.MONGO_URI
    : 'mongodb://localhost:27017/moneyManage',
  PORT: process.env.PORT ? process.env.PORT : 8080,
};
