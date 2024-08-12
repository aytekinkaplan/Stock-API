"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */

const purchaseController = require("../controllers/purchaseController");

router.post("/create", purchaseController.create);
router.get("/get", purchaseController.getPurchases);
router.get("/get/:id", purchaseController.getPurchase);
router.delete("/delete/:id", purchaseController.deletePurchase);
router.put("/update/:id", purchaseController.updatePurchase);

module.exports = router;
