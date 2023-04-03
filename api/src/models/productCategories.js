const { DataTypes } = require("sequelize");
const sequelize = require("../data/connection");

const ProductCategory = sequelize.define(
  "product_categories",
  {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "products",
        key: "id",
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "categories",
        key: "id",
      },
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    tableName: "product_categories",
  }
);

module.exports = ProductCategory;