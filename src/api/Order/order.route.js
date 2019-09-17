const Router = require('express')
// const validate = require('express-validation')

// const orderParam = require('./order.param')
const orderCntrl = require('./order.controller')

const { guardUser } = require('../../libs/jwToken')

const router = Router()

router.route('/')

  .get(guardUser(), orderCntrl.list)

  .post(guardUser(), orderCntrl.create)

router.route('/:OrderedId')

  .get(guardUser(), orderCntrl.get)

router.route('/admin/:OrderId')

  .get(guardUser(), orderCntrl.get)

  .delete(guardUser(), orderCntrl.remove)

module.exports = router
