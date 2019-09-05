const Joi = require('joi')

module.exports = {
  create: {
    body: {
      name: Joi.string().required(),
      price: Joi.string().required(),
      image: Joi.string(),
      description: Joi.string().required(),
      quantity: Joi.string().required(),
      vendors: Joi.string(),
      stock: Joi.string(),
      expires: Joi.string().required(),
      variant: Joi.string(),
      offer: Joi.string()
    }
  },
  list: {
    query: {
      skip: Joi.string(),
      limit: Joi.string()
    }
  },
  get: {
    params: {
      productId: Joi.string().required()

    }
  }
}
