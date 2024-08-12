"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */

const brandController = require("../controllers/brandController");

router.post("/create", brandController.create);
router.get("/get", brandController.getBrands);
router.get("/get/:id", brandController.getBrand);
router.delete("/delete/:id", brandController.deleteBrand);
router.put("/update/:id", brandController.updateBrand);
router.post("/search", brandController.searchBrand);
router.post("/filter", brandController.filterBrand);

module.exports = router;
