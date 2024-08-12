"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */

const saleController = require("../controllers/saleController");

router.post("/create", saleController.create);
router.get("/get", saleController.getSales);
router.get("/get/:id", saleController.getSale);
router.delete("/delete/:id", saleController.deleteSale);
router.put("/update/:id", saleController.updateSale);

module.exports = router;
