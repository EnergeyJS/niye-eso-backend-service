const _ = require('lodash')
const APIError = require('../../libs/APIError')
const httpStatus = require('http-status')

const Order = require('./order.model')
const Product = require('../product/product.model')

async function get (req, res, next) {
  try {
    console.log('Get Orderded product')
  } catch (e) {
    next(e)
  }
}

async function create (req, res, next) {
  try {
    console.log(req.body)
  } catch (e) {
    let err = e
    if (err.code && err.code === 11000) {
      err = new APIError(err.errmsg, httpStatus.BAD_REQUEST, false)
    }
    return next(err)
  }
}

async function list (req, res, next) {
  try {
    console.log('get order')
  } catch (e) {
    next(e)
  }
}

async function remove (req, res, next) {
  try {
    console.log('removing order')
  } catch (e) {
    next(e)
  }
}

module.exports = {
  get,
  create,
  list,
  remove
}
