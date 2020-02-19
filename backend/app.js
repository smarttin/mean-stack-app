const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const postsRoutes = require("./routes/posts.route");
const userRoutes = require("./routes/user.route");
 
const app = express();

mongoose
  .connect("mongodb://localhost:27017/mean-stack-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log("Connection failed!", err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join(__dirname, 'images')));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);

const port = process.env.PORT || "3000";

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
