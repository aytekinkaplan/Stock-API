"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */

// Token Model:

const TokenSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    token: {
      type: String,
      trim: true,
      required: true,
      index: true,
      unique: true, // Token'ın benzersiz olduğunu belirtir
    },
  },
  { collection: "tokens", timestamps: true }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Token", TokenSchema);
