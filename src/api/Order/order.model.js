const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  product: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      pricePerQuantity: {
        type: Number,
        required: true
      },
      offerPrice: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'offer'

      },
      calculatedPriceforPerQuantity: {
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

module.exports = mongoose.model('order', OrderSchema)
