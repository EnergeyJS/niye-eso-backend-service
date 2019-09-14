const Router = require('express')
const validate = require('express-validation')

const orderParam = require('./order.param')
const orderCntrl = require('./order.controller')

const { guardUser } = require('../../libs/jwToken')

const router = Router()

router.route('/')

  .get(guardUser(), orderCntrl.list)

  .post(guardUser(), orderCntrl.create)

router.route('/admin')

  .get(guardUser(), orderCntrl.get)

  .delete(guardUser(), orderCntrl.remove)

module.exports = router
