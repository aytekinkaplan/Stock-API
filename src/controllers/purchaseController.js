"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const Purchase = require("../models/purchaseModel");
const { validationResult } = require("express-validator");
const CustomError = require("../errors/customError");

module.exports = {
  getPurchases: async (req, res) => {
    /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Get all purchases"
            #swagger.description = 'Get all purchases.'
        */

    const purchases = await Purchase.find();
    res.json(purchases);
  },

  getPurchase: async (req, res) => {
    /*

    #swagger.tags = ["Purchases"]
    #swagger.summary = "Get one purchase"
    #swagger.description = 'Get one purchase.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'id of the purchase',
        type: 'string'
    }

    */
    const purchase = await Purchase.findOne({ _id: req.params.id });
    res.json(purchase);
  },

  createPurchase: async (req, res) => {
    /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Create purchase"
            #swagger.description = 'Create purchase.'
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Purchase name',
                schema: {
                    "name": "test",
                }
            }
        */
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name } = req.body;
    const purchase = new Purchase({ name });
    await purchase.save();
    res.json(purchase);
  },

  updatePurchase: async (req, res) => {
    /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Update purchase"
            #swagger.description = 'Update purchase.'
            #swagger.parameters['id'] = {
                in: 'path',
                description: 'id of the purchase',
                type: 'string'
            }
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Purchase name',
                schema: {
                    "name": "test",
                }
            }
        */
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name } = req.body;
    const purchase = await Purchase.findOneAndUpdate(
      { _id: req.params.id },
      { name },
      { new: true }
    );
    res.json(purchase);
  },

  deletePurchase: async (req, res) => {
    /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Delete purchase"
            #swagger.description = 'Delete purchase.'
            #swagger.parameters['id'] = {
                in: 'path',
                description: 'id of the purchase',
                type: 'string'
            }
        */
    const purchase = await Purchase.findOneAndDelete({ _id: req.params.id });
    res.json(purchase);
  },

  deletePurchases: async (req, res) => {
    /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Delete purchases"
            #swagger.description = 'Delete purchases.'
        */
    const purchases = await Purchase.deleteMany();
    res.json(purchases);
  },

  deleteAllPurchases: async (req, res) => {
    /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Delete all purchases"
            #swagger.description = 'Delete all purchases.'
        */
    const purchases = await Purchase.deleteMany();
    res.json(purchases);
  },
};
