const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Note = require("./models/Note");

const bodyParser = require("body-parser");
const noteRouter = require("./routes/Notes");

app.use(bodyParser.urlencoded({ extended: false })); //true : Nested object supported, else not.
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://notes:notes@cluster0.ticinrl.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(function () {
    app.get("/", function (req, res) {
      var response = { message: "API Working!" };
      res.json(response);
    });
    app.use("/notes", noteRouter);
  });

//Home route

const PORT = process.env.PORT || 2222;
app.listen(PORT, function () {
  console.log("server started at" + PORT);
});
module.exports = app;
