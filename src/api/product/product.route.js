
const Router = require('express')
const validate = require('express-validation')

const productParam = require('./product.param')
const productCntrl = require('./product.controller')

// const { guardUser, adminCheck } = require('../../libs/jwToken')

const router = Router()

router.route('/')

  .get(validate(productParam.list), productCntrl.list)
  .post(validate(productParam.create), productCntrl.create)

router.route('/:productId')
  .get(validate(productParam.get), productCntrl.get)

router.route('/admin')
  .get(productCntrl.listAdmin)

  .post(validate(productParam.create), productCntrl.create)

router
  .route('/:productId/admin')
  .put(validate(productParam.update), productCntrl.update)

  .delete(validate(productParam.delete), productCntrl.remove)

router.param('productId', productCntrl.load)

module.exports = router
