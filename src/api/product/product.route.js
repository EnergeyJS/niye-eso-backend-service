
const Router = require('express')
const validate = require('express-validation')

const productParam = require('./product.param')
const productCntrl = require('./product.controller')

const router = Router()

router.route('/')

  .get(validate(productParam.list), productCntrl.list)
  .post(validate(productParam.create), productCntrl.create)

router.route('/:productId')
  .get(validate(productParam.get), productCntrl.get)

router.param('productId', productCntrl.load)

module.exports = router
