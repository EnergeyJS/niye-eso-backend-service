const { Router } = require('express')
const validate = require('express-validation')
const guard = require('express-jwt')

const orderParam = require('./order.param')
const orderCtrl = require('./order.controller')
const env = require('../../config/environment')

const router = Router()

router.route('/')
  /**
   * @api {get} /api/users List Users
   * @apiName List Users
   * @apiGroup User
   * @apiVersion 1.0.0
   *
   * @apiParam none
   *
   * @apiSuccess {Array} users List of users
   * @apiError {Object} error Error response
   */
  .get(guard({ secret: env.jwtSecret, requestProperty: 'auth' }), validate(orderParam.list), orderCtrl.list)

  /**
   * @api {post} /api/users Create User
   * @apiName Create User
   * @apiGroup User
   * @apiVersion 1.0.0
   *
   * @apiParam (body) {String} username Username of user
   * @apiParam (body) {String} mobileNumber Mobile number of user
   * @apiParam (body) {String} password Password of user
   *
   * @apiSuccess {Object} users List of users
   * @apiError {Object} error Error response
   */
  .post(guard({ secret: env.jwtSecret, requestProperty: 'auth' }), validate(orderParam.create), orderCtrl.create)

router.route('/:orderId')
  /**
   * @api {get} /api/users/:orderId Get User
   * @apiName Get User
   * @apiGroup User
   * @apiVersion 1.0.0
   *
   * @apiParam (param) {String} orderId _id of user
   *
   * @apiSuccess {Object} user Details of user
   * @apiError {Object} error Error response
   */
  .get(guard({ secret: env.jwtSecret, requestProperty: 'auth' }), validate(orderParam.get), orderCtrl.get)

  /**
   * @api {put} /api/users/:orderId Update User
   * @apiName Update User
   * @apiGroup User
   * @apiVersion 1.0.0
   *
   * @apiParam (param) {String} orderId _id of user
   * @apiParam (body) {String} mobileNumber Mobile number of user
   *
   * @apiSuccess {Object} users List of users
   * @apiError {Object} error Error response
   */
  .put(guard({ secret: env.jwtSecret, requestProperty: 'auth' }),
    validate(orderParam.update),
    orderCtrl.update)

  /**
   * @api {delete} /api/users/:orderId Delete User
   * @apiName Delete User
   * @apiGroup User
   * @apiVersion 1.0.0
   *
   * @apiParam (param) {String} orderId _id of user
   *
   * @apiSuccess {Object} user Deleted user details
   * @apiError {Object} error Error response
   */
  .delete(guard({ secret: env.jwtSecret, requestProperty: 'auth' }),
    validate(orderParam.remove),
    orderCtrl.remove)

/**
 * Load user when API is hit with orderId param
 */
router.param('orderId', orderCtrl.load)

module.exports = router
