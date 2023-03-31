const Category = require("../models").categoryModel;

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

    module.exports = {
        getAllCategories
    }