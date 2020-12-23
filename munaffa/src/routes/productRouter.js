const express = require("express");
const productController = require("../controller/productController");
const router = new express.Router();
const auth = require("../middleware/auth");

//Route for Creating Product
router.post("/createProduct", auth, productController.createProduct);

//Route for viewing All Product
router.get("/viewAllProducts/:email", auth, productController.viewAllProducts);

//Route for Viewing Specific Product
router.get("/viewProduct/:id", auth, productController.viewProduct);

//Route for Updating Product
router.patch("/updateProduct/:id", auth, productController.updateProduct);

//Route for Deleting specific Product
router.delete("/deleteProduct/:id", auth, productController.deleteProduct);

//Route to Delete All Product
router.delete(
  "/deleteAllProducts/:email",
  auth,
  productController.deleteAllProducts
);

module.exports = router;
