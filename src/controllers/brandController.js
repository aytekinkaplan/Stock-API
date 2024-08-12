"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
// Brand Controller:
const Brand = require("../models/brandModel");
const CustomError = require("../errors/customError");
const { validationResult } = require("express-validator");

module.exports = {
  getBrands: async (req, res) => {
    /*
            #swagger.tags = ["Brands"]
            #swagger.summary = "Get all brands"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

    let customFilter = {};
    if (req.user?.isAdmin) {
      customFilter = {};
    } else if (req.user?.isStaff) {
      customFilter = { isStaff: true };
    }

    const data = await Brand.find(customFilter);
    res.status(200).send({
      error: false,
      data,
    });
  },

  getBrand: async (req, res) => {
    /*
            #swagger.tags = ["Brands"]
            #swagger.summary = "Get single brand"
        */

    const data = await Brand.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      data,
    });
  },

  createBrand: async (req, res) => {
    /*
            #swagger.tags = ["Brands"]
            #swagger.summary = "Create brand"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref: "#/definitions/Brand"
                }
            }
        */
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name } = req.body;
    const brand = new Brand({ name });
    await brand.save();
    res.json(brand);
  },

  updateBrand: async (req, res) => {
    /*
            #swagger.tags = ["Brands"]
            #swagger.summary = "Update brand"
            #swagger.parameters['id'] = {
                in: 'path',
                description: 'id of the brand',
                type: 'string'
            }
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref: "#/definitions/Brand"
                }
            }
        */
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name } = req.body;
    const brand = await Brand.findOneAndUpdate(
      { _id: req.params.id },
      { name },
      { new: true }
    );
    res.json(brand);
  },

  deleteBrand: async (req, res) => {
    /*
            #swagger.tags = ["Brands"]
            #swagger.summary = "Delete brand"
            #swagger.parameters['id'] = {
                in: 'path',
                description: 'id of the brand',
                type: 'string'
            }
        */
    const brand = await Brand.findOneAndDelete({ _id: req.params.id });
    res.json(brand);
  },
};
