const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRoute = require("./routes/userRoutes.js");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/users", userRoute);

app.listen(3000, () => {
  console.log("server run on port 3000");
});
