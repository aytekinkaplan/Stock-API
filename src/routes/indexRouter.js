"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */

router.use("/auth", require("./authRouter"));
router.use("/brands", require("./brandRouter"));
router.use("/categories", require("./categoryRouter"));
router.use("/firms", require("./firmRouter"));
router.use("/products", require("./productRouter"));
router.use("/purchases", require("./purchaseRouter"));
router.use("/sales", require("./saleRouter"));
router.use("/documents", require("./documentRouter"));
router.use("/tokens", require("./tokenRouter"));

module.exports = router;
