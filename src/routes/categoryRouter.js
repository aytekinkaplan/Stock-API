"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */

const categoryController = require("../controllers/categoryController");

router.post("/create", categoryController.create);
router.get("/get", categoryController.getCategories);
router.get("/get/:id", categoryController.getCategory);
router.delete("/delete/:id", categoryController.deleteCategory);
router.put("/update/:id", categoryController.updateCategory);

module.exports = router;
