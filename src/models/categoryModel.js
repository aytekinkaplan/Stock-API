"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    collection: "categories", // Collection Name (küçük harf)
    timestamps: true, // Timestamps
  }
);

module.exports = mongoose.model("Category", categorySchema); // Model adı tekil
