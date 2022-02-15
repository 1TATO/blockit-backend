const express = require('express');
const routes = express.Router();

const products = require("./src/controllers/ProductController");
const admins = require("./src/controllers/AdminController");

routes.get('/products', products.findAll);
routes.get("/products/:id", products.show);
routes.post("/products", products.store);
routes.put("/products/:id", products.update);
routes.delete("/products/:id", products.destroy);

routes.get('/admins', admins.findAll);
routes.post("/admins", admins.createAdmin);
routes.post("/adminsAuth", admins.authenticateAdmin);
routes.delete("/admins/:id", admins.destroyAdmin);

module.exports = routes;
