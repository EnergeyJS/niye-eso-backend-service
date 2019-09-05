const { Router } = require('express')
const validate = require('express-validation')

const adminParam = require('./admin.param')
const adminCntrl = require('./admin.controller')

const { guardUser, adminCheck } = require('../../libs/jwToken')

const router = Router()

router.route('/dashboard')

  .get(guardUser(), adminCheck, validate(adminParam.list), adminCntrl.getCount)

  .post(guardUser(),
    adminCheck,
    validate(adminParam.create),
    adminCntrl.create
  )

  .get(guardUser(), adminCheck, validate(adminParam.list), adminCntrl)

router.route('/changePassword')

  .patch(guardUser(), adminCheck, validate(adminParam.changePassword), adminCntrl.changePassword)

router.route('/:adminId')

  .put(guardUser(), adminCheck, validate(adminParam.update), adminCntrl.update)
