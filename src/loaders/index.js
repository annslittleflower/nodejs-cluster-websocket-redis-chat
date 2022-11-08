const expressLoader = require('./express-loader');
const dbLoader = require('./db-loader');

module.exports = async (app) => {
  const mongoConnection = await dbLoader();

  const db = mongoConnection.connection;

  db.on('error', () => console.error('MongoDB connection error:'));
  db.on('connected', () => console.error(`CONNECTED to MongoDB`));

  return await expressLoader(app);
}

