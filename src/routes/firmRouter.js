"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */

const firmController = require("../controllers/firmController");

router.post("/create", firmController.create);
router.get("/get", firmController.getFirms);
router.get("/get/:id", firmController.getFirm);
router.delete("/delete/:id", firmController.deleteFirm);
router.put("/update/:id", firmController.updateFirm);
router.post("/search", firmController.searchFirm);

module.exports = router;
