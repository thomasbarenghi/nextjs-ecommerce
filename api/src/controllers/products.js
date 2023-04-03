const Product = require("../models").productModel;
const Category = require("../models").categoryModel;

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          attributes: ["id", "name"],
          through: { attributes: [] },
        },
      ],
    });
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message1: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    inStock,
    sku,
    slug,
    categories,
    ribbon,
  } = req.body;

  if (!name || !price || !inStock || !sku || !slug || !categories) {
    console.log(req.body);
    return res.status(400).json({ message: "Missing fields" });
  }

  const newProduct = {
    name: name,
    price: price,
    inStock: true,
    sku: sku,
    slug: slug,
    categories: [],
    formattedPrice: `$${price}`,
    ribbon: ribbon,
    description: description,
  };

  try {
    const product = await Product.create(newProduct);
    console.log(categories);
    if (categories && categories.length > 0) {
      const categoryFn = await Category.findAll({ where: { id: categories } });
      console.log("hey:", categoryFn);
      await product.addCategories(categoryFn);
    }

    //obtenemos todos los productos
    const products = await Product.findAll();

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    //borramos el producto
    const product = await Product.destroy({ where: { id: id } });
    //obtenemos todos los productos
    const products = await Product.findAll();
    return res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
};
