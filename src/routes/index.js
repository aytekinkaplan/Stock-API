"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/:

// URL: /

// // auth:
// router.use('/auth', require('./auth'))
// user:
router.use("/users", require("./userRouter"));
// token:
router.use("/tokens", require("./tokenRouter"));

// brand:
router.use("/brands", require("./brandRouter"));
// category:
router.use("/categories", require("./categoryRouter"));
// firm:
router.use("/firms", require("./firmRouter"));
// product:
router.use("/products", require("./productRouter"));
// purchase:
router.use("/purchases", require("./purchaseRouter"));
// sale:
router.use("/sales", require("./saleRouter"));

// document:
router.use("/documents", require("./documentRouter"));

/* ------------------------------------------------------- */
module.exports = router;
