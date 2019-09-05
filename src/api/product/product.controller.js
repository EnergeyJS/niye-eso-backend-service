const _ = require('lodash')

const Product = require('./product.model')

async function load (req, res, next) {
  const id = req.params.productId
  console.log(id)
  try {
    req.product = await Product.findOne({ '_id': id })
    return next()
  } catch (e) {
    next(e)
  }
}

function get (req, res, next) {
  const product = req.product
  const sendProduct = _.pick(product, [
    '_id',
    'name',
    'price',
    'image',
    'description',
    'quantity',
    'vendors',
    'stock',
    'expires',
    'variant',
    'offer'

  ])
  return res.json(sendProduct)
}

async function create (req, res, next) {
  try {
    const {
      name,
      price,
      description,
      quantity,
      vendors,
      stock,
      expires,
      variant,
      offer
    } = req.body
    const product = new Product({
      name,
      price,
      description,
      quantity,
      vendors,
      stock,
      expires,
      variant,
      offer
    })
    product.image = req.file ? req.file.location : null
    const savedProduct = await product.save()
    const sendProduct = _.pick(savedProduct, [
      'name',
      'price',
      'image',
      'description',
      'quantity',
      'vendors',
      'stock',
      'expires',
      'variant',
      'offer'
    ])
    return res.json(sendProduct)
  } catch (e) {
    next(e)
  }
}
async function list (req, res, next) {
  try {
    const products = await Product.list(req.query)
    return res.json(products)
  } catch (e) {
    next(e)
  }
}

module.exports = {
  load,
  list,
  get,
  create
}
