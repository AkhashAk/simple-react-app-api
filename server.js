const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const docketRouter = require('./routes/docketRoutes');
const poDataRouter = require('./routes/poDataRoutes');

app.use(express.json());
app.use(cors());
app.use("/docket", docketRouter);
app.use("/poData", poDataRouter);
app.use(bodyParser.json());

//DB Config
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(port, console.log(`Server started at port : ${port}`));
  })
  .catch((error) => {
    console.error(error);
  });