const Joi = require('joi')

module.exports = {
  get: {
    params: {
      productId: Joi.string().required()
    }
  },
  create: {
    header: {
      authorization: Joi.string().required()
    },
    body: {
      name: Joi.string().required(),
      price: Joi.number().required(),
      description: Joi.string().required(),
      measure: Joi.array().items(Joi.object({
        size: Joi.string().required(),
        quantity: Joi.string()
      })),
      vendors: Joi.string(),
      stock: Joi.boolean(),
      expires: Joi.date().required(),
      variant: Joi.array().items(Joi.object({
        color: Joi.string().required(),
        image: Joi.string()
      }))
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
      price: Joi.number().required(),
      description: Joi.string().required(),
      measure: Joi.array().items(Joi.object({
        size: Joi.string().required(),
        quantity: Joi.string()
      })),
      vendors: Joi.string(),
      stock: Joi.boolean(),
      expires: Joi.date().required(),
      variant: Joi.array().items(Joi.object({
        color: Joi.string().required(),
        image: Joi.string()
      }))
    }
  },
  list: {
    query: {
      skip: Joi.string(),
      limit: Joi.string()
    }
  },
  adminList: {
    header: {
      authorization: Joi.string().required()
    },
    query: {
      skip: Joi.string(),
      limit: Joi.string()
    }
  },
  Adminget: {
    header: {
      authorization: Joi.string().required()
    },
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
