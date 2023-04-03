const mongoose = require("mongoose");
import crypto from "crypto";

const facultyModel = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: "Email already exists",
  },
  hashedPassword: String,
  salt: String,
  sections: [
    {
      year: String,
      sectionName: String,
      subjects: [String],
    },
  ],
});

facultyModel
  .virtual("password")
  .set(function (input) {
    this._password = input;
    this.salt = this.makeSalt();
    this.hashedPassword = this.encryptPassword(input);
  })
  .get(function () {
    return this._password;
  });

facultyModel.methods = {
  makeSalt: function () {
    return Math.round(new Date().valueOf() * (Math.random() + 0.1)) + "";
  },
  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
  authenticate: function (password) {
    return this.encryptPassword(password) === this.hashedPassword;
  },
};
module.exports = mongoose.model("facultyModel", facultyModel);
