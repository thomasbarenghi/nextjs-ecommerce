const { Router } = require('express');
//const videogamesRoutes = require('./videogames');
//const genreRoutes = require('./genre');
//const videogameGenreRoutes = require('./videogames-genres');
//const platformsRoutes = require('./platforms');
const productsRoutes = require('./products');
const categoriesRoutes = require('./categories');
const router = Router();

// Ruta principal
router.get('/', (req, res) => { res.json({ message: 'Bienvenido a mi API' }); });
router.use("/products", productsRoutes);
router.use("/categories", categoriesRoutes);
//router.use("/videogames", videogamesRoutes);
//router.use("/genre", genreRoutes);
//router.use("/videogameGenre", videogameGenreRoutes);
//router.use("/platforms", require('./platforms'));
//router.use("/videogamesPlatforms", platformsRoutes);


module.exports = router;
