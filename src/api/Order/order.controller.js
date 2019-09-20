const _ = require('lodash')
const APIError = require('../../libs/APIError')
const httpStatus = require('http-status')

const OrderedProduct = require('./order.model')
// const Product = require('../product/product.model')

const OrderedData = [
  'user',
  'OrderedProduct'
]

async function get (req, res, next) {
  try {
    const id = req.params.OrderedId
    const OrderededData = await OrderedProduct
      .findOne({ '_id': id })
      .populate('OrderedProduct.productId')
    return res.json(OrderededData)
  } catch (e) {
    next(e)
  }
}

async function create (req, res, next) {
  try {
    const orderedProduct = new OrderedProduct(_.pick(req.body, OrderedData))
    orderedProduct.user = req.auth._id
    const saveOrderedProduct = await orderedProduct.save()
    const sendOrderedProduct = _.pick(saveOrderedProduct, OrderedData)
    return res.json(sendOrderedProduct)
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
    const OrderedProducts = await OrderedProduct.list(req.query)
    return res.json(OrderedProducts)
  } catch (e) {
    next(e)
  }
}

async function remove (req, res, next) {
  try {
    const id = req.params.OrderedId
    const orderedProduct = await OrderedProduct.findOne({ '_id': id })
    const deletedOrderedProduct = await orderedProduct.remove()
    const sendOrderedProduct = _.pick(deletedOrderedProduct, ['user', 'OrderedProduct'])
    return res.json(sendOrderedProduct)
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
