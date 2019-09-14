
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
  description: {
    type: String,
    required: true
  },
  measure: [
    {
      size: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  Brands: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand'
  },
  vendors: {
    type: String
  },
  stock: {
    type: Boolean
  },
  expires: {
    type: Date,
    default: Date.now,
    required: true
  },
  variant: [
    {
      color: {
        type: String
      },
      image: {
        type: String
      }
    }],
  offer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Offer'
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
