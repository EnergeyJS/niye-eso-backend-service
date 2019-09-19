const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const OrderSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: 'user'
  },
  OrderedProduct: [
    {
      productId: {
        type: ObjectId,
        ref: 'product'
      },
      productName: {
        type: String
      },
      productImage: {
        type: String
      },
      quantity: {
        type: Number
      },
      pricePerQuantity: {
        type: Number
      },
      TotalPrice: {
        type: Number
      }

    }
  ]
},
{
  timestamps: true
})

/**
 * Statics
 */
OrderSchema.statics = {
  async list ({ skip = 0, limit = 100 } = {}) {
    const orderedProducts = await this.find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec()
    return orderedProducts
  }
}
module.exports = mongoose.model('order', OrderSchema)
