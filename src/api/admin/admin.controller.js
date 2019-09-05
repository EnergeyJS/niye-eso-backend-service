const _ = require('lodash')
const Admin = require('./admin.model')
const APIError = require('../../libs/APIError')
const httpStatus = require('http-status')

const adminData = [
  'fullName',
  'email',
  'phoneNumber',
  'password',
  'address'
]

async function load (req, res, next, id) {
  try {
    req.admin = await Admin.get({ '_id': id })
    return next()
  } catch (e) {
    next(e)
  }
}

async function create (req, res, next) {
  try {
    const {
      fullName,
      email,
      phoneNumber,
      password,
      address
    } = req.body
    const admin = new Admin({
      fullName,
      email,
      phoneNumber,
      password,
      address
    })
    admin.image = req.file ? req.file.location : null
    const savedAdmin = await admin.save()
    const sendAdmin = _.pick(savedAdmin, adminData)
    return res.json(sendAdmin)
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
    const admin = req.admin
    const updateAdmin = req.body

    Object.keys(updateAdmin).map((key) => {
      admin[key] = updateAdmin[key]
    })

    if (req.file) {
      admin.photo = req.file.location
    }

    const savedAdmin = await admin.save()

    const sendAdmin = _.pick(savedAdmin, adminData)
    return res.json(sendAdmin)
  } catch (e) {
    let err = e
    if (err.code && err.code === 11000) {
      err = new APIError(err.errmsg, httpStatus.BAD_REQUEST, false)
    }

    return next(err)
  }
}

async function list (req, res, next) {
  try {
    const admins = await Admin.list(req.query)
    return res.json(admins)
  } catch (e) {
    next(e)
  }
}

async function changePassword (req, res, next) {
  try {
    const { oldPassword, newPassword } = req.body
    const admin = await Admin.findOne({ email: req.auth.email })
    if (admin.comparePassword(oldPassword)) {
      admin.password = newPassword
      admin.changePassword = false
      const savedAdmin = await admin.save()

      const sendAdmin = _.pick(savedAdmin, adminData)
      return res.json(sendAdmin)
    } else {
      throw new APIError('Old Password is not correct', httpStatus.BAD_REQUEST, true)
      // res.status(400).json({ message: 'Old password is not correct' })
    }
  } catch (e) {
    let err = e
    if (err.code && err.code === 11000) {
      err = new APIError(err.errmsg, httpStatus.BAD_REQUEST, false)
    }
    return next(err)
  }
}

module.exports = {
  create,
  update,
  load,
  list,
  changePassword
}
