const mongoose = require('mongoose');

const { DATABASE_NAME = 'test1' } = process.env;

const mongoDB = `mongodb://the_mongo:33333/${DATABASE_NAME}`;
mongoose.Promise = global.Promise;

const mongoOptions = {
  connectTimeoutMS: 10000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}

const connectToDB = async () => {
  return await mongoose.connect(mongoDB, mongoOptions);
};

module.exports = connectToDB;
