const Joi = require('joi')

module.exports = {
  list: {
    query: {
      skip: Joi.string(),
      limit: Joi.string()
    }
  },
  create: {
    body: {
      fullName: Joi.string().required(),
      phoneNumber: Joi.string().required(),
      // eslint-disable-next-line no-useless-escape
      email: Joi.string().required().regex(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
      password: Joi.string().required(),
      address: Joi.string().required()
    }
  },
  changePassword: {
    headers: {
      authorization: Joi.string().required()
    },
    body: {
      oldPassword: Joi.string().required(),
      newPassword: Joi.string().required()
    }

  },
  update: {
    headers: {
      authorization: Joi.string().required()
    },
    params: {
      adminId: Joi.string().required()

    }

  }
}
