const { Router } = require('express')
const validate = require('express-validation')
const guard = require('express-jwt')

const productParam = require('./product.param')
const productCtrl = require('./product.controller')
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
  .get(validate(productParam.list), productCtrl.list)

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
  .post(guard({ secret: env.jwtSecret, requestProperty: 'auth' }), validate(productParam.create), productCtrl.create)

router.route('/:productId')
  /**
   * @api {get} /api/users/:productId Get User
   * @apiName Get User
   * @apiGroup User
   * @apiVersion 1.0.0
   *
   * @apiParam (param) {String} productId _id of user
   *
   * @apiSuccess {Object} user Details of user
   * @apiError {Object} error Error response
   */
  .get(validate(productParam.get), productCtrl.get)

  /**
   * @api {put} /api/users/:productId Update User
   * @apiName Update User
   * @apiGroup User
   * @apiVersion 1.0.0
   *
   * @apiParam (param) {String} productId _id of user
   * @apiParam (body) {String} mobileNumber Mobile number of user
   *
   * @apiSuccess {Object} users List of users
   * @apiError {Object} error Error response
   */
  .put(guard({ secret: env.jwtSecret, requestProperty: 'auth' }),
    validate(productParam.update),
    productCtrl.update)

  /**
   * @api {delete} /api/users/:productId Delete User
   * @apiName Delete User
   * @apiGroup User
   * @apiVersion 1.0.0
   *
   * @apiParam (param) {String} productId _id of user
   *
   * @apiSuccess {Object} user Deleted user details
   * @apiError {Object} error Error response
   */
  .delete(guard({ secret: env.jwtSecret, requestProperty: 'auth' }),
    validate(productParam.remove),
    productCtrl.remove)

/**
 * Load user when API is hit with productId param
 */
router.param('productId', productCtrl.load)

module.exports = router
