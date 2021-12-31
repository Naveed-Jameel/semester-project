var express = require("express");
var Product = require("../models/product");
var auth = require("../middlewares/auth");
var router = express.Router();

router.get("/", async function (req, res, next) {
  let products = await Product.find();
  {
    res
      .status(200)
      .render("products/list", { title: "products from DB", products });
  }
});
router.get("/items", auth, async function (req, res, next) {
  let products = await Product.find();
  return res.send(products);
});

router.get("/add", function (req, res, next) {
  res.render("products/add");
});

//store data in db
router.post("/add", async function (req, res, next) {
  let product = new Product(req.body);
  await product.save();
  res.redirect("/products");
});

router.get("/delete/:id", async function (req, res, next) {
  var product = await Product.findByIdAndDelete(req.params.id);
  res.redirect("/products");
});

router.get("/edit/:id", async function (req, res, next) {
  var product = await Product.findById(req.params.id);
  res.render("products/edit", { product });
});

router.post("/edit/:id", async function (req, res, next) {
  var product = await Product.findById(req.params.id);
  product.name = req.body.name;
  product.price = req.body.price;

  await product.save();
  res.redirect("/products");
});
module.exports = router;
