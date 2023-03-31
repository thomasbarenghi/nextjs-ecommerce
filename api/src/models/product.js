const { DataTypes } = require("sequelize");
const sequelize = require("../data/connection");
const Category = require("./category");


const Product = sequelize.define(
  "products",
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
    description: {
      type: DataTypes.TEXT,
    },
    main_media: {
      type: DataTypes.TEXT,
    },
    media_items: {
      type: DataTypes.JSONB,
    },
    sku: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    discounted_price: {
      type: DataTypes.DECIMAL(10, 2),
    },
    in_stock: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    slug: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    underscored: true,
    tableName: "products",
  }
);


Product.belongsToMany(Category, { through: "product_categories" });
Category.belongsToMany(Product, { through: "product_categories" });

//Product.belongsToMany(Collection, { through: ProductCollection });
//Collection.belongsToMany(Product, { through: ProductCollection });

module.exports = Product;
