const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const mongoDB = require("./db");
mongoDB();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Home!");
});
const apiRoute = require("./routes/api");
app.use("/api", apiRoute);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
