const productServices = require("../services/productService");

module.exports = {
  createProduct: async (req, resp) => {
    try {
      const res = await productServices.createProduct(
        req.body.id,
        req.body.name,
        req.body.price,
        req.body.belongsto
      );
      resp.status(201).json({
        msg: res,
      });
    } catch (e) {
      resp.status(400).json({
        msg: e,
      });
    }
  },
  updateProduct: async (req, resp) => {
    try {
      const res = await productServices.updateProduct(
        req.body.name,
        req.body.price,
        req.params.id
      );
      resp.status(200).json({
        msg: res,
      });
    } catch (e) {
      resp.status(500).json({
        msg: e,
      });
    }
  },
  viewProduct: async (req, resp) => {
    try {
      //console.log("CONTT");
      const res = await productServices.getProduct(req.params.id);
      resp.status(200).json({
        msg: res,
      });
    } catch (e) {
      resp.status(500).json({
        msg: e,
      });
    }
  },
  viewAllProducts: async (req, resp) => {
    try {
      const res = await productServices.getAllProduct(req.params.email);
      resp.status(200).json({
        msg: res,
      });
    } catch (e) {
      resp.status(500).json({
        msg: e,
      });
    }
  },
  deleteProduct: async (req, resp) => {
    try {
      const res = await productServices.deleteProduct(req.params.id);
      resp.status(200).json({
        msg: res,
      });
    } catch (e) {
      resp.status(500).json({
        msg: e,
      });
    }
  },
  deleteAllProducts: async (req, resp) => {
    try {
      console.log(req.params.email);
      const res = await productServices.deleteAllProducts(req.params.email);
      resp.status(200).json({
        msg: res,
      });
    } catch (e) {
      resp.status(500).json({
        msg: e,
      });
    }
  },
};
