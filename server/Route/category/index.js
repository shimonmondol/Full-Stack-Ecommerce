const express = require("express");
const multer = require("multer");
const {
  createcategoryController,
  fetchAllCategoryController,
  singleCategoryController,
  deletecategoryController,
  updateCategoryController,
} = require("../../controllers/categoryController");

const router = express.Router();


// confiq multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    let filename = file.originalname.split(".");
    let extention = filename[filename.length - 1];
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + `.${extention}`);
  },
});

const upload = multer({ storage: storage });

router.post(
  "/createcategory",
  upload.single("image"),
  createcategoryController
);

router.get("/allcategory", fetchAllCategoryController);
router.get("/singlecategory/:id", singleCategoryController);
router.delete("/deletecategory/:id", deletecategoryController);
router.patch(
  "/updatecategory/:id",
  upload.single("image"),
  updateCategoryController
);

module.exports = router;
