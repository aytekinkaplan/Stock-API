"use strict";
const { Collection } = require("mongoose");
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
const { passwordEncrypt } = require("../helpers/passwordEncrypt");
const { emailValidation } = require("../helpers/emailValidation");
const uniqueValidator = require("mongoose-unique-validator");

// User Model:
/* ------------------------------------------------------- */
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      set: (password) => passwordEncrypt(password),
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate: (email) => emailValidation(email),
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isStaff: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "users", // Collection Name (küçük harf)
    timestamps: true, // Timestamps
  }
);

/* ------------------------------------------------------- */

userSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

userSchema.plugin(uniqueValidator, {
  message: "This {PATH} already exists",
});

module.exports = mongoose.model("User", userSchema);
