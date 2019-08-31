const Joi = require('joi')

module.exports = {
  /**
   * @apiName Create Sell
   * @apiGroup Sell
   */
  create: {
    body: {
      customer: Joi.string().required(),
      product: Joi.array().required(),
      price: Joi.string().required()
    }
  },

  /**
   * @apiName Get Sell
   * @apiGroup Sell
   */
  get: {
    headers: {
      authorization: Joi.string().required()
    },
    params: {
      orderId: Joi.string().required()
    }
  },

  /**
   * @apiName Update Sell
   * @apiGroup Sell
   */
  update: {
    headers: {
      authorization: Joi.string().required()
    },
    params: {
      orderId: Joi.string().required()
    },
    body: {
      customer: Joi.string().required()
    }
  },

  /**
   * @apiName List Users
   * @apiGroup Sell
   */
  list: {
    query: {
      skip: Joi.string(),
      limit: Joi.string()
    }
  },

  /**
   * @apiName Delete Sell
   * @apiGroup Sell
   */
  remove: {
    headers: {
      authorization: Joi.string().required()
    },
    params: {
      orderId: Joi.string().required()
    }
  }
}
