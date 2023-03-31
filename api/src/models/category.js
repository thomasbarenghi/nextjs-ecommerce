const { DataTypes } = require("sequelize");
const sequelize = require("../data/connection");

const Category = sequelize.define(
  "categories",
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    underscored: true,
    tableName: "categories",
  }
);

module.exports = Category;
