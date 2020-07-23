//Importing required Packages for User Model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Defining User Model for Mongo DB
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
    },
  },
  {
    timestamps: true,
  }
);

//Exporting the User Model
const User = mongoose.model("users", userSchema);
module.exports = User;
