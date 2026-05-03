const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const indexRoutes = require("./routes/index");
const { connectToDatabase } = require("./data/database");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/", indexRoutes);

connectToDatabase()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});