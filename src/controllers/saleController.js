"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const Sale = require("../models/saleModel");
const { validationResult } = require("express-validator");
const CustomError = require("../errors/customError");

module.exports = {
  getSales: async (req, res) => {
    /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Get all sales"
            #swagger.description = 'Get all sales.'
        */

    const sales = await Sale.find();
    res.json(sales);
  },

  getSale: async (req, res) => {
    /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Get one sale"
            #swagger.description = 'Get one sale.'
            #swagger.parameters['id'] = {
                in: 'path',
                description: 'id of the sale',
                type: 'string'
            }
        */
    const sale = await Sale.findOne({ _id: req.params.id });
    res.json(sale);
  },

  createSale: async (req, res) => {
    /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Create sale"
            #swagger.description = 'Create sale.'
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Sale name',
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
    const sale = new Sale({ name });
    await sale.save();
    res.json(sale);
  },

  updateSale: async (req, res) => {
    /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Update sale"
            #swagger.description = 'Update sale.'
            #swagger.parameters['id'] = {
                in: 'path',
                description: 'id of the sale',
                type: 'string'
            }
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Sale name',
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
    const sale = await Sale.findOneAndUpdate(
      { _id: req.params.id },
      { name },
      { new: true }
    );
    res.json(sale);
  },

  deleteSale: async (req, res) => {
    /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Delete sale"
            #swagger.description = 'Delete sale.'
            #swagger.parameters['id'] = {
                in: 'path',
                description: 'id of the sale',
                type: 'string'
            }
        */
    const sale = await Sale.findOneAndDelete({ _id: req.params.id });
    res.json(sale);
  },

  deleteSales: async (req, res) => {
    /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Delete sales"
            #swagger.description = 'Delete sales.'
        */
    const sales = await Sale.deleteMany();
    res.json(sales);
  },

  deleteAllSales: async (req, res) => {
    /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Delete all sales"
            #swagger.description = 'Delete all sales.'
        */
    const sales = await Sale.deleteMany();
    res.json(sales);
  },
};
