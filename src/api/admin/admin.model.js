const Promise = require('bluebird')
const mongoose = require('mongoose')
const httpStatus = require('http-status')
const APIError = require('../../libs/APIError')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)

const adminSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  photo: {
    type: String
  },
  role: {
    type: String,
    default: 'dataEntry',
    enum: ['dataEntry', 'checker']
  },
  status: {
    type: String,
    default: 'active',
    enum: ['active', 'suspended']
  },
  changePassword: {
    type: Boolean,
    default: true
  }
},
{
  timestamps: true
})

function passwordHashing (next) {
  if (!this.isModified('password')) {
    return next()
  }
  this.password = bcrypt.hashSync(this.password, salt)
  return next()
}

adminSchema.pre('save', passwordHashing)

adminSchema.method({
  comparePassword (password) {
    return bcrypt.compareSync(password, this.password)
  }
})

adminSchema.statics = {
  async get (condition) {
    const admin = await this.findOne(condition).exec()
    if (admin) {
      return admin
    }
    const err = new APIError('No such home-owner exists!', httpStatus.NOT_FOUND)
    return Promise.reject(err)
  },

  async list ({ skip = 0, limit = 100 } = {}) {
    const admins = await this.find()
      .skip(+skip)
      .limit(+limit)
      .exec()
    return admins
  }
}
module.exports = mongoose.model('admin', adminSchema)
