"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const Product = require("../models/productModel");
const { validationResult } = require("express-validator");
const CustomError = require("../errors/customError");

module.exports = {
  getProducts: async (req, res) => {
    /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Get all products"
            #swagger.description = 'Get all products.'
        */

    const products = await Product.find();
    res.json(products);
  },

  getProduct: async (req, res) => {
    /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Get one product"
            #swagger.description = 'Get one product.'
            #swagger.parameters['id'] = {
                in: 'path',
                description: 'id of the product',
                type: 'string'
            }
        */
    const product = await Product.findOne({ _id: req.params.id });
    res.json(product);
  },

  createProduct: async (req, res) => {
    /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Create product"
            #swagger.description = 'Create product.'
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Product name',
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
    const product = new Product({ name });
    await product.save();
    res.json(product);
  },

  updateProduct: async (req, res) => {
    /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Update product"
            #swagger.description = 'Update product.'
            #swagger.parameters['id'] = {
                in: 'path',
                description: 'id of the product',
                type: 'string'
            }
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Product name',
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
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      { name },
      { new: true }
    );
    res.json(product);
  },

  deleteProduct: async (req, res) => {
    /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Delete product"
            #swagger.description = 'Delete product.'
            #swagger.parameters['id'] = {
                in: 'path',
                description: 'id of the product',
                type: 'string'
            }
        */
    const product = await Product.findOneAndDelete({ _id: req.params.id });
    res.json(product);
  },

  getProductsByCategory: async (req, res) => {
    /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Get products by category"
            #swagger.description = 'Get products by category.'
            #swagger.parameters['id'] = {
                in: 'path',
                description: 'id of the category',
                type: 'string'
            }
        */
    const products = await Product.find({ category: req.params.id });
    res.json(products);
  },
};
