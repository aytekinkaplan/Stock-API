"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */

const productController = require("../controllers/productController");

router.post("/create", productController.create);
router.get("/get", productController.getProducts);
router.get("/get/:id", productController.getProduct);
router.delete("/delete/:id", productController.deleteProduct);
router.put("/update/:id", productController.updateProduct);
router.post("/search", productController.searchProduct);

module.exports = router;
