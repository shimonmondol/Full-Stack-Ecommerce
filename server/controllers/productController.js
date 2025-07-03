const categorymodel = require("../models/categorymodel");
const productModel = require("../models/productModel");
const path = require("path");
const fs = require("fs");

async function CreateProductController(req, res) {
  let {
    title,
    description,
    color,
    stock,
    discountprice,
    sellingprice,
    category,
  } = req.body;

  let images = req.files.map(
    (item) =>
      `https://full-stack-ecommerce-server.onrender.com/${item.filename}`
  );

  try {
    let productcreate = new productModel({
      title,
      description,
      color,
      stock,
      discountprice,
      sellingprice,
      image: images,
      category,
    });

    await productcreate.save();
    let categoryupdate = await categorymodel.findOneAndUpdate(
      {
        _id: productcreate.category,
      },
      { $push: { product: productcreate._id } },
      { new: true }
    );

    await categoryupdate.save();

    return res
      .status(201)
      .json({ msg: "product created succesful", data: productcreate });
  } catch (error) {
    return res
      .status(500)
      .json({ err: error.message ? error.message : error, success: false });
  }
}

async function getAllProductController(req, res) {
  try {
    const products = await productModel.find({});

    res.status(200).json({
      msg: "product fetch successfully",
      success: true,
      products,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ err: error.message ? error.message : error, success: false });
  }
}

async function deleteProductController(req, res) {
  const { id } = req.params;
  try {
    const deleteproduct = await productModel.findOneAndDelete({ _id: id });

    let existingpath = path.join(__dirname, "../uploads");
    console.log(existingpath);

    deleteproduct.image.forEach((imgpath) => {
      let splitpath = imgpath.split("/");
      let imagepath = splitpath[splitpath.length - 1];
      fs.unlink(`${existingpath}/${imagepath}`, (err) => {
        console.log(err);
      });
    });

    const findcategory = await categorymodel.findOneAndUpdate(
      {
        product: id,
      },
      { $pull: { product: id } },
      { new: true }
    );

    await findcategory.save();

    return res.status(200).json({
      msg: "product delete successfull",
      success: true,
      data: deleteproduct,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ err: error.message ? error.message : error, success: false });
  }
}

async function singleProductController(req, res) {
  const { id } = req.params;
  try {
    const singleproduct = await productModel
      .findOne({ _id: id })
      .populate("category");

    return res.status(200).json({
      msg: "single product fetch success",
      success: true,
      product: singleproduct,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ err: error.message ? error.message : error, success: false });
  }
}

module.exports = {
  CreateProductController,
  getAllProductController,
  deleteProductController,
  singleProductController,
};
