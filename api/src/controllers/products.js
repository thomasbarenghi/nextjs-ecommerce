const Product = require('../models').productModel;
const Category = require('../models').categoryModel;


const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll({
            include: [
                {
                    model: Category,
                    attributes: ['id', 'name'],
                    through: { attributes: [] }
                }
            ]
        } );
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message1: error.message });
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllProducts,
    getProductById
}