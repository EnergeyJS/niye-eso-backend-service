
const jwt = require('jsonwebtoken')
const env = require('../config/environment')
const expressJwt = require('express-jwt')

const create = (payload, expiresIn) => {
  return jwt.sign(payload, env.jwtSecret, { expiresIn })
}

const getData = (token) => jwt.decode(token)

const guardUser = () => expressJwt({ secret: env.jwtSecret, requestProperty: 'auth' })

const adminCheck = (req, res, next) => {
  if ((req.auth.role === 'admin')) {
    return next()
  } else {
    res.status(400).json({ error: 'You are suspended or not admin' })
  }
}

module.exports = {
  create,
  getData,
  guardUser,
  adminCheck
}
