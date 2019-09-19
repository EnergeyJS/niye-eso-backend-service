const Joi = require('joi')

module.exports = {
  list: {
    query: {
      skip: Joi.string(),
      limit: Joi.string()
    }
  },
  get: {
    header: {
      authorization: Joi.string().required()
    },
    params: {
      orderId: Joi.string().required()
    }
  },
  create: {
    header: {
      authorization: Joi.string().required()
    },
    body: {
      user: Joi.string(),
      OrderedProduct: Joi.array().items(Joi.object({
        productId: Joi.string(),
        productName: Joi.string(),
        productImage: Joi.string(),
        quantity: Joi.number(),
        pricePerQuantity: Joi.string(),
        offerPrice: Joi.number(),
        calculatedPriceforPerQuantity: Joi.number(),
        TotalPrice: Joi.number()
      }))
    }
  },
  delete: {
    header: {
      authorization: Joi.string().required()
    },
    params: {
      orderId: Joi.string().required()
    }
  }
}
