const express = require('express');
const router = express.Router();

const { paymentsController } = require('../controllers');

router.get('/', (req, res) => {
    res.json({ message: 'Bienvenido a mi API de pagos' })
});

router.post('/', paymentsController.createPayment);


module.exports = router;