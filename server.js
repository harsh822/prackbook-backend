var express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
// import express from "express";
// import path from "path";
// import mongoose from "mongoose";
const routes = require("./routes/routes.js");
// import routes from "./routes/routes.js";

const app = express();

mongoose.connect(process.env.mongourl);
// const __dirname = path.resolve();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

mongoose.connection.on("connected", () => {
  console.log("connected to mongo server.");
});
mongoose.connection.on("error", (err) => {
  console.log("error while connecting to mongo server:", err);
});

// app.use(express.static(path.resolve(__dirname, "./build")));

app.listen(process.env.PORT || 3000, () => {
  console.log("listening..");
  //   app.get("*", (req, res) => {
  //     res.sendFile(path.resolve(__dirname, "./build", "index.html"));
  //   });
});
