const categorymodel = require("../models/categorymodel");
const path = require("path");
const fs = require("fs");

async function createcategoryController(req, res) {
  let { title, description, product } = req.body;
  let { filename } = req.file;

  try {
    let category = new categorymodel({
      title,
      description,
      image: `https://full-stack-ecommerce-server.onrender.com/${filename}`,
      product,
    });

    await category.save();

    res.status(201).json({
      suceess: true,
      msg: "category created successful",
      data: category,
    });
  } catch (error) {
    res
      .status(500)
      .json({ err: error.message ? error.message : error, success: false });
  }
}

async function fetchAllCategoryController(req, res) {
  try {
    let category = await categorymodel.find({}).populate("product");
    return res
      .status(200)
      .json({ success: true, msg: "category successful", data: category });
  } catch (error) {
    return res
      .status(500)
      .json({ err: error.message ? error.message : error, success: false });
  }
}

async function singleCategoryController(req, res) {
  let { id } = req.params;
  try {
    let singlecategory = await categorymodel.findOne({ _id: id });

    return res.status(200).json({
      success: true,
      msg: "single category successful",
      data: singlecategory,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ err: error.message ? error.message : error, success: false });
  }
}

async function deletecategoryController(req, res) {
  let { id } = req.params;
  let findcategory = await categorymodel.findOne({ _id: id });
  if (!findcategory) {
    return res.status(404).json({ success: true, msg: "category not found" });
  } else {
    let existingpath = path.join(__dirname, "../uploads");
    let existingcategory = await categorymodel.findOneAndDelete({ _id: id });

    let splitpath = existingcategory.image.split("/");
    let imagepath = splitpath[splitpath.length - 1];

    fs.unlink(`${existingpath}/${imagepath}`, (err) => {
      console.log(err);
    });

    res.status(200).json({
      success: true,
      msg: "category deleted successful",
      data: findcategory,
    });
  }
}

async function updateCategoryController(req, res) {
  let { id } = req.params;
  let { title } = req.body;
  let { filename } = req.file;

  try {
    if (title && filename) {
      let existingpath = path.join(__dirname, "../uploads");
      let existingcategory = await categorymodel.findOneAndUpdate(
        { _id: id },
        {
          image: `https://full-stack-ecommerce-server.onrender.com/${filename}`,
          title: title,
        }
      );

      let splitpath = existingcategory.image.split("/");
      let imagepath = splitpath[splitpath.length - 1];

      fs.unlink(`${existingpath}/${imagepath}`, (err) => {
        console.log(err);
      });

      res.status(200).json({
        success: true,
        msg: "category updated successful",
        data: existingcategory,
      });
    } else if (title) {
      let updatecategory = await categorymodel.findOneAndUpdate(
        { _id: id },
        { title: title },
        { new: true }
      );
      return res
        .status(201)
        .json({ msg: "category updated", data: updatecategory });
    } else if (filename) {
      let existingpath = path.join(__dirname, "../uploads");
      let existingcategory = await categorymodel.findOneAndUpdate(
        { _id: id },
        {
          image: `https://full-stack-ecommerce-server.onrender.com/${filename}`,
        }
      );

      let splitpath = existingcategory.image.split("/");
      let imagepath = splitpath[splitpath.length - 1];

      fs.unlink(`${existingpath}/${imagepath}`, (err) => {
        console.log(err);
      });

      res.status(200).json({
        success: true,
        msg: "category updated successful",
        data: existingcategory,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ err: error.message ? error.message : error, success: false });
  }
}

module.exports = {
  createcategoryController,
  fetchAllCategoryController,
  singleCategoryController,
  deletecategoryController,
  updateCategoryController,
};
