const express = require("express");
const dotenv = require("dotenv");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

dotenv.config();

const app = express();
const indexRoutes = require("./routes/index");
const { connectToDatabase } = require("./data/database");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/", indexRoutes);

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Contacts API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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