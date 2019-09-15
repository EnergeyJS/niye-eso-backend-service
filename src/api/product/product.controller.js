const _ = require('lodash')
const APIError = require('../../libs/APIError')
const httpStatus = require('http-status')
const freeUpload = require('freeupload')

const Product = require('./product.model')

const keyFilename = 'niyeeso-freeupload-1b463438ef47.json'
const bucketName = 'niyeeso-freeupload.appspot.com'
const projectId = 'niyeeso-freeupload'

const productData = [
  '_id',
  'name',
  'price',
  'description',
  'measure',
  'vendors',
  'stock',
  'expires',
  'variant',
  'offer'
]

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
  const sendProduct = _.pick(product, productData)
  return res.json(sendProduct)
}

async function create (req, res, next) {
  try {
    console.log(req.body)
    const product = new Product(_.pick(req.body, productData))
    if (req.file) {
      try {
        let url = await freeUpload.upload(req.file, keyFilename, bucketName, projectId)
        product.variant.push({ color: 'red', image: url })
      } catch (err) {
        next(err)
      }
    }
    product.image = req.file ? req.file.location : null
    const savedProduct = await product.save()
    const sendProduct = _.pick(savedProduct, productData)
    return res.json(sendProduct)
  } catch (e) {
    let err = e
    if (err.code && err.code === 11000) {
      err = new APIError(err.errmsg, httpStatus.BAD_REQUEST, false)
    }
    return next(err)
  }
}

async function update (req, res, next) {
  try {
    const product = req.product
    const updateProduct = _.pick(req.body, productData)
    Object.keys(updateProduct).map(key => {
      product[key] = updateProduct[key]
    })
    const savedProduct = await product.save()
    return res.json(savedProduct)
  } catch (e) {
    next(e)
  }
}
async function list (req, res, next) {
  try {
    const products = await Product.list(req.query)
    return res.json(products)
  } catch (e) {
    let err = e
    if (err.code && err.code === 11000) {
      err = new APIError(err.errmsg, httpStatus.BAD_REQUEST, false)
    }
    return next(err)
  }
}
async function listAdmin (req, res, next) {
  try {
    const { page, limit } = req.query
    const products = await Product.list({ page, limit })
    return res.json(products)
  } catch (e) {
    next(e)
  }
}

async function remove (req, res, next) {
  try {
    const product = req.product
    const deletedProduct = await product.remove()
    const sendProperty = _.pick(deletedProduct, ['_id', 'name'])
    return res.json(sendProperty)
  } catch (e) {
    next(e)
  }
}

module.exports = {
  load,
  list,
  listAdmin,
  get,
  create,
  update,
  remove
}
