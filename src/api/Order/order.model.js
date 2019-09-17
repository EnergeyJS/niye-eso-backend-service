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
        // required: true
      },
      productName: {
        type: String,
        required: true
      },
      productImage: {
        type: String
      },
      quantity: {
        type: Number,
        required: true
      },
      pricePerQuantity: {
        type: Number,
        required: true
      },
      TotalPrice: {
        type: Number,
        required: true
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
