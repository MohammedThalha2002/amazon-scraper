const express = require("express");
const cors = require("cors");
const logRouter = require("./routes/log.router");
require("./config/db");

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/", logRouter);

app.listen(PORT, () => {
  console.log(`Listening to the PORT : ` + PORT);
});