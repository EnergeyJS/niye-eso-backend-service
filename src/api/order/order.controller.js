const _ = require('lodash')
const bcrypt = require('bcryptjs')
const httpStatus = require('http-status')

const Order = require('./order.model')
const APIError = require('../../libs/APIError')

const salt = bcrypt.genSaltSync(10)
/**
 * Load order and append to req object
 */
async function load (req, res, next, id) {
  try {
    req.sell = await Order.get({ '_id': id })
    return next()
  } catch (e) {
    next(e)
  }
}

/**
 * Get sell
 * @property {string} req.params.sellId _id of sell
 * @returns {<Order, Error>}
 */
function get (req, res, next) {
  const sell = req.sell
  return res.json(sell)
}

/**
 * Create new sell
 * @property {string} req.body.ordername username of user
 * @property {string} req.body.mobileNumber mobileNumber of user
 * @property {string} req.body.password password of user
 * @returns {<Order, Error>}
 */
async function create (req, res, next) {
  try {
    const order = new Order({
      customer: req.body.customer,
      price: req.body.price,
      shipment: req.body.shipment,
      product: req.body.product
    })
    const savedOrder = await order.save()
    const sendOrder = _.pick(savedOrder, ['_id', 'customer', 'price'])
    return res.json(sendOrder)
  } catch (e) {
    let err = e
    if (err.code && err.code === 11000) {
      err = new APIError(err.errmsg, httpStatus.BAD_REQUEST, false)
    }
    return next(err)
  }
}

/**
 * Update user
 * @property {string} req.params.orderId _id of order
 * @property {string} req.body.customer customer _id of order
 * @returns {<Order, Error>}
 */
async function update (req, res, next) {
  try {
    const order = req.order
    order.orderdId = req.body.orderdId
    const savedOrder = await order.save()
    const sendOrder = _.pick(savedOrder, ['_id', 'customer', 'product_id'])
    return res.json(sendOrder)
  } catch (e) {
    next(e)
  }
}

/**
 * List orders
 * @property {string} req.params.limit number of orders to be listed
 * @property {string} req.params.skip number of orders to be skipped
 * @returns {<Order[], Error>}
 */
async function list (req, res, next) {
  try {
    const orders = await Order.list(req.query)
    return res.json(orders)
  } catch (e) {
    next(e)
  }
}

/**
 * Delete order
 * @property {string} req.params.orderId _id of order
 * @returns {<Order, Error>}
 */
async function remove (req, res, next) {
  try {
    const sell = req.sell
    const deletedOrder = await sell.remove()
    const sendOrder = _.pick(deletedOrder, ['_id', 'customer', 'product_id'])
    return res.json(sendOrder)
  } catch (e) {
    next(e)
  }
}

module.exports = {
  load,
  get,
  create,
  list,
  update,
  remove
}
