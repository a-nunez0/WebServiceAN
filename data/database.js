const { MongoClient } = require("mongodb");

let database;

const connectToDatabase = async () => {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  database = client.db(process.env.MONGODB_DB_NAME);
  console.log("Connected to MongoDB");
};

const getDatabase = () => {
  return database;
};

module.exports = {
  connectToDatabase,
  getDatabase,
};
