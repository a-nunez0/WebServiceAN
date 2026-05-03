const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const indexRoutes = require("./routes/index");
const { connectToDatabase } = require("./data/database");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/", indexRoutes);

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
