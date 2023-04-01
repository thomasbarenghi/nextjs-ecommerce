const mercadoPago = require("mercadopago");
//dotenv
require("dotenv").config();

const { MP_ACCESS_TOKEN } = process.env;

mercadoPago.configure({
  access_token: MP_ACCESS_TOKEN,
});

const createPayment = async (req, res) => {
  const { body } = req;
  console.log(body);

  let preference = {
    items: [  ],
    back_urls: {
      success: "http://localhost:3000",
      failure: "",
      pending: "",
    },
    auto_return: "approved",
    binary_mode: true,
    payment_methods: {
      excluded_payment_types: [
        {
          id: "ticket",
        },
      ],
    },
  };

  body.products.forEach((product) => {
    let item = {
      title: product.title,
      description: product.description,
      unit_price: product.price,
      quantity: product.quantity,
      currency_id: "ARS",
      category_id: "art",
      picture_url: product.pictureUrl,
    };

    // Agregar el objeto `item` al arreglo `items` de la preferencia
    preference.items.push(item);
  });

  try {
    const response = await mercadoPago.preferences.create(preference);
    console.log(response.body);
    res.status(200).json(response.body);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createPayment,
};
