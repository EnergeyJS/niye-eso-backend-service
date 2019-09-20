const Router = require('express')
const validate = require('express-validation')

const orderParam = require('./order.param')
const orderCntrl = require('./order.controller')

const { guardUser, adminCheck } = require('../../libs/jwToken')

const router = Router()

router.route('/')

/**
 * @api {get} /api/orders Get Order List (User)
 * @apiName Get Order list (User)
 * @apiGroup Orders
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Array} Order[] List of Order
 * @apiError {Object} error Error response
 */

  .get(guardUser(), validate(orderParam.list), orderCntrl.list)

/**
   * @api {post} /api/orders Create Order (User)
   * @apiName Create Order (User)
   * @apiGroup Orders
   * @apiVersion 1.0.0
   *
   * @apiParam (body) {string} user userInfo of the Given Order
   * @apiParam (body) {array} OrderedProduct Products Info of the Given Order
   * @apiSuccess {string} user userInfo of the Given Orders
   * @apiSuccess {array} OrderedProduct ProductsInfo of the Given Order

   * @apiError {Object} error Error response
   */

  .post(guardUser(), validate(orderParam.create), orderCntrl.create)

router.route('/:OrderedId')

/**
 * @api {get} /api/orders/:OrderedId Get a specific OrderInfo (User)
 * @apiName Get Order (User)
 * @apiGroup Orders
 * @apiVersion 1.0.0
 *
 * @apiParam (param) {string} OrderedId _id of the Order
 *
 * @apiSuccess {String} _id Id of the Order
 * @apiSuccess {string} user userInfo of the Given Order
 * @apiSuccess {array} OrderedProduct ProductInfo of the Given Order
 * @apiError {Object} error Error response
 */

  .get(guardUser(), validate(orderParam.get), orderCntrl.get)

router.route('/admin')

/**
   * @api {get} /api/orders/admin Get Order List (Admin)
   * @apiName Get Order list (Admin)
   * @apiGroup Orders
   * @apiVersion 1.0.0
   *
   * @apiSuccess {Array} Order[] List of Order.
   * @apiError {Object} error Error response
   */
  .get(guardUser(), adminCheck, validate(orderParam.list), orderCntrl.list)

router.route('/admin/:OrderId')

/**
 * @api {get} /api/orders/admin/:OrderedId Get a specific Order Info (Admin)
 * @apiName Get OrderInfo (Admin)
 * @apiGroup Orders
 * @apiVersion 1.0.0
 *
 * @apiParam (param) {string} OrderedId _id of the Order
 *
 * @apiSuccess {String} _id Id of the Order
 * @apiSuccess {string} user userInfo of the Given Orders
 * @apiSuccess {array} OrderedProduct ProductInfo of the Given Order
 * @apiError {Object} error Error response
 */

  .get(guardUser(), adminCheck, validate(orderParam.get), orderCntrl.get)

/**
   * @api {delete} /api/orders/admin/:OrderId Delete a Order (Admin)
   * @apiName Delete a Order (Admin)
   * @apiGroup Orders
   * @apiVersion 1.0.0
   *
   * @apiParam (param) {String} OrderId _id of a Order
   *
   * @apiSuccess {String} _id OrderId of Order
   * @apiSuccess {String} user UserInfo of the deleted Order
   * @apiSuccess {String} OrderedProduct OrderInfo of the deleted Order
   * @apiError {Object} error Error response
   */

  .delete(guardUser(), adminCheck, validate(orderParam.delete), orderCntrl.remove)

module.exports = router
