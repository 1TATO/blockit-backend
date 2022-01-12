const express = require('express');
const routes = express.Router();

const products = require("./src/controllers/ProductController");

routes.get('/products', products.findAll);
routes.get("/products/:id", products.show);
routes.post("/products", products.store);
routes.put("/products/:id", products.update);
routes.delete("/products/:id", products.destroy);

module.exports = routes;
