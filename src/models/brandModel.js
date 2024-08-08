"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */
const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    image: {
      type: String,
    },
  },
  {
    collection: "brands", // Collection Name (küçük harf)
    timestamps: true, // Timestamps
  }
);

module.exports = mongoose.model("Brand", brandSchema); // Model adı tekil
