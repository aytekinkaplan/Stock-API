"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const Category = require("../models/categoryModel");
const { validationResult } = require("express-validator");
const CustomError = require("../errors/customError");

module.exports = {
  getCategories: async (req, res) => {
    /*
            #swagger.tags = ["Categories"]
            #swagger.summary = "Get all categories"
            #swagger.description = 'Get all categories.'
        */

    const categories = await Category.find();
    res.json(categories);
  },

  getCategory: async (req, res) => {
    /*
            #swagger.tags = ["Categories"]
            #swagger.summary = "Get one category"
            #swagger.description = 'Get one category.'
            #swagger.parameters['id'] = {
                in: 'path',
                description: 'id of the category',
                type: 'string'
            }
        */
    const category = await Category.findOne({ _id: req.params.id });
    res.json(category);
  },

  createCategory: async (req, res) => {
    /*
            #swagger.tags = ["Categories"]
            #swagger.summary = "Create category"
            #swagger.description = 'Create category.'
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Category name',
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
    const category = new Category({ name });
    await category.save();
    res.json(category);
  },

  updateCategory: async (req, res) => {
    /*
            #swagger.tags = ["Categories"]
            #swagger.summary = "Update category"
            #swagger.description = 'Update category.'
            #swagger.parameters['id'] = {
                in: 'path',
                description: 'id of the category',
                type: 'string'
            }
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Category name',
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
    const category = await Category.findOneAndUpdate(
      { _id: req.params.id },
      { name }
    );
    res.json(category);
  },

  deleteCategory: async (req, res) => {
    /*
            #swagger.tags = ["Categories"]
            #swagger.summary = "Delete category"
            #swagger.description = 'Delete category.'
            #swagger.parameters['id'] = {
                in: 'path',
                description: 'id of the category',
                type: 'string'
            }
        */
    const category = await Category.findOneAndDelete({ _id: req.params.id });
    res.json(category);
  },
};
