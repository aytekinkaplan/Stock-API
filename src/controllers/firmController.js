"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const Firm = require("../models/firmModel");
const { validationResult } = require("express-validator");
const CustomError = require("../errors/customError");

module.exports = {
  getFirms: async (req, res) => {
    /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "Get all firms"
            #swagger.description = 'Get all firms.'
        */

    const firms = await Firm.find();
    res.json(firms);
  },

  getFirm: async (req, res) => {
    /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "Get one firm"
            #swagger.description = 'Get one firm.'
            #swagger.parameters['id'] = {
                in: 'path',
                description: 'id of the firm',
                type: 'string'
            }
        */
    const firm = await Firm.findOne({ _id: req.params.id });
    res.json(firm);
  },

  createFirm: async (req, res) => {
    /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "Create firm"
            #swagger.description = 'Create firm.'
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Firm name',
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
    const firm = new Firm({ name });
    await firm.save();
    res.json(firm);
  },

  updateFirm: async (req, res) => {
    /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "Update firm"

            #swagger.parameters['id'] = {
                in: 'path',
                description: 'id of the firm',
                type: 'string'
            } 

            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Firm name',
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
    const firm = await Firm.findOneAndUpdate(
      { _id: req.params.id },
      { name },
      { new: true }
    );
    res.json(firm);
  },

  deleteFirm: async (req, res) => {
    /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "Delete firm"

            #swagger.parameters['id'] = {
                in: 'path',
                description: 'id of the firm',
                type: 'string'
            }
        */
    const firm = await Firm.findOneAndDelete({ _id: req.params.id });
    res.json(firm);
  },

  deleteFirms: async (req, res) => {
    /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "Delete firms"
        */
    const firms = await Firm.deleteMany();
    res.json(firms);
  },
};
