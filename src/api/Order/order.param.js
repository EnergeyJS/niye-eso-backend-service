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
      product: Joi.array().items(Joi.object({
        productId: Joi.string().required(),
        quantity: Joi.number().required(),
        pricePerQuantity: Joi.string().required(),
        offerPrice: Joi.number(),
        calculatedPriceforPerQuantity: Joi.number().required(),
        TotalPrice: Joi.number().required()
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
