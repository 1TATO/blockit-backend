const DataTypes = require("sequelize");
const db = require("../db");

const Product = db.define('product', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  launchDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  developer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  distributor: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Product;
