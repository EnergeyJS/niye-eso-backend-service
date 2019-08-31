const Promise = require('bluebird')
const mongoose = require('mongoose')
const httpStatus = require('http-status')
const APIError = require('../../libs/APIError')

/**
 * Sell Schema
 */
const OrderSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  shipment: {
    type: String,
    required: true
  },
  product: [{
    product_id: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }]
}
)

/**
 * Methods
 */
OrderSchema.method({
})
/**
 * Set time stamp on create and upddate
 */
OrderSchema.set('timestamps', true)

/**
 * Statics
 */
OrderSchema.statics = {
  /**
   * Get Order
   * @param {Object} conditions - conditions to find sell for
   * @returns {Promise<Order, Error>}
   */
  async get (conditions) {
    const sell = await this.findOne(conditions).exec()
    if (sell) {
      return sell
    }
    const err = new APIError('No such sell exists!', httpStatus.NOT_FOUND)
    return Promise.reject(err)
  },

  /**
   * List sells in decending order of 'createdAt' timestamp
   * @param {number} skip - Number of sells to be skipped
   * @param {number} limit - Limit number of sells to be returned
   * @returns {Promise<Order[], Error>}
   */
  async list ({ skip = 0, limit = 50 } = {}) {
    const sells = await this.find()
      .select('-password')
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec()
    return sells
  }
}

/**
 * @typedef Order
 */
module.exports = mongoose.model('Order', OrderSchema)
