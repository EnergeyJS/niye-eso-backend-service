const Joi = require('joi')

module.exports = {
  create: {
    header: {
      authorization: Joi.string().required()
    },
    body: {
      name: Joi.string().required(),
      price: Joi.string().required(),
      description: Joi.string().required(),
      quantity: Joi.string().required(),
      vendors: Joi.string(),
      stock: Joi.string(),
      expires: Joi.string().required(),
      variant: Joi.array().items(Joi.object({
        variantType: Joi.string().required(),
        image: Joi.string()
      })),
      offer: Joi.string()
    }
  },
  update: {
    header: {
      authorization: Joi.string().required()
    },
    params: {
      productId: Joi.string().required()
    },
    body: {
      name: Joi.string().required(),
      price: Joi.string().required(),
      description: Joi.string().required(),
      quantity: Joi.string().required(),
      vendors: Joi.string(),
      stock: Joi.string(),
      expires: Joi.string().required(),
      variant: Joi.array().items(Joi.object({
        variantType: Joi.string().required(),
        image: Joi.string()
      })),
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
  },
  delete: {
    header: {
      authorization: Joi.string().required()
    },
    params: {
      productId: Joi.string().required()
    }
  }
}
