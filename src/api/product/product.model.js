
const mongoose = require('mongoose')

/**
 * Product Schema
 */
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  vendors: {
    type: String
  },
  stock: {
    type: String
  },
  expires: {
    type: String,
    required: true
  },
  variant: [{
    type: String
  }],
  offer: {
    type: String
  }
})

/**
 * Methods
 */
ProductSchema.method({
})

/**
 * Statics
 */
ProductSchema.statics = {

  async list ({ skip = 0, limit = 100 } = {}) {
    const products = await this.find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec()
    return products
  }
}

module.exports = mongoose.model('Product', ProductSchema)
