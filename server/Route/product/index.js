const express = require("express");
const {
  CreateProductController,
  getAllProductController,
  deleteProductController,
  singleProductController,
} = require("../../controllers/productController");
const multer = require("multer");
const router = express.Router();

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
  "/createproduct",
  upload.array("images", 4),
  CreateProductController
);

router.get("/products", getAllProductController);
router.delete("/deleteproduct/:id", deleteProductController);
router.get("/singleproduct/:id", singleProductController);

module.exports = router;
