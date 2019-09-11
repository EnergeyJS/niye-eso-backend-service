
const Router = require('express')
const validate = require('express-validation')

const productParam = require('./product.param')
const productCntrl = require('./product.controller')

const { guardUser, adminCheck } = require('../../libs/jwToken')

const router = Router()

router.route('/')

/**
   * @api {get} /api/product GET Products List (User)
   * @apiName  User Product list
   * @apiGroup Product
   * @apiVersion 1.0.0
   *
   * @apiSuccess {Array} products[] List of product.
   * @apiError {Object} error Error response
   */

  .get(validate(productParam.list), productCntrl.list)

/**
   * @api {post} /api/product POST Products (Admin)
   * @apiName Product
   * @apiGroup Product
   * @apiVersion 1.0.0
   *
   * @apiParam (body) {string} name name of the product
   * @apiParam (body) {string} price price of the product
   * @apiParam (body) {string} description description of the product
   * @apiParam (body) {string} quantity Quantity of the product
   * @apiParam (body) {string} vendors vendors of the product
   * @apiParam (body) {string} stock stock of one product
   * @apiParam (body) {string} expires expire Date of the product
   * @apiParam (body) {array} variant variant of product
   * @apiParam (body) {string} offer offer of product
   *
   * @apiSuccess  {string} name name of the product
   * @apiSuccess  {string} price price of the product
   * @apiSuccess  {string} description description of the product
   * @apiSuccess  {string} quantity Quantity of the product
   * @apiSuccess  {string} vendors vendors of the product
   * @apiSuccess  {string} stock stock of one product
   * @apiSuccess  {string} expires expire Date of the product
   * @apiSuccess  {array} variant variant of product
   * @apiSuccess  {string} offer offer of product
   * @apiError    {Object} error Error response
   */

  .post(validate(productParam.create), productCntrl.create)

router.route('/:productId')
/**
 * @api {get} /api/product/:productId Get product
 * @apiName Get Product
 * @apiGroup Product
 * @apiVersion 1.0.0
 *
 * @apiParam (param) {string} productId _id of Product
 *
 * @apiSuccess {String} _id Id of newly created property Object
 * @apiSuccess  (body) {string} name name of the product
 * @apiSuccess  (body) {string} price price of the product
 * @apiSuccess  (body) {string} description description of the product
 * @apiSuccess  (body) {string} quantity Quantity of the product
 * @apiSuccess  (body) {string} vendors vendors of the product
 * @apiSuccess  (body) {string} stock stock of one product
 * @apiSuccess  (body) {string} expires expire Date of the product
 * @apiSuccess  (body) {array} variant variant of product
 * @apiSuccess  (body) {string} offer offer of product
 * @apiError {Object} error Error response
 */
  .get(validate(productParam.get), productCntrl.get)

router.route('/admin')

/**
   * @api {get} /api/product/admin GET Product List (Admin)
   * @apiName  Admin Product list
   * @apiGroup Product
   * @apiVersion 1.0.0
   *
   * @apiSuccess {Array} products[] List of product.
   * @apiError {Object} error Error response
   */
  .get(productCntrl.listAdmin)

/**
   * @api {post} /api/product/admin Create Products (Admin)
   * @apiName Admin Post Product
   * @apiGroup Product
   * @apiVersion 1.0.0
   *
   * @apiParam (body) {string} name name of the product
   * @apiParam (body) {string} price price of the product
   * @apiParam (body) {string} description description of the product
   * @apiParam (body) {string} quantity Quantity of the product
   * @apiParam (body) {string} vendors vendors of the product
   * @apiParam (body) {string} stock stock of one product
   * @apiParam (body) {string} expires expire Date of the product
   * @apiParam (body) {array} variant variant of product
   * @apiParam (body) {string} offer offer of product
   *
   * @apiSuccess  {string} name name of the product
   * @apiSuccess  {string} price price of the product
   * @apiSuccess  {string} description description of the product
   * @apiSuccess  {string} quantity Quantity of the product
   * @apiSuccess  {string} vendors vendors of the product
   * @apiSuccess  {string} stock stock of one product
   * @apiSuccess  {string} expires expire Date of the product
   * @apiSuccess  {array} variant variant of product
   * @apiSuccess  {string} offer offer of product
   * @apiError    {Object} error Error response
   */

  .post(validate(productParam.create), productCntrl.create)

router
  .route('/:productId/admin')
  /**
 * @api {get} /api/product/:productId/admin Get product  Details for Admin
 * @apiName Get Product Admin
 * @apiGroup Product
 * @apiVersion 1.0.0
 *
 * @apiParam (param) {string} productId _id of Product
 *
 * @apiSuccess {String} _id Id of newly created property Object
 * @apiSuccess  (body) {string} name name of the product
 * @apiSuccess  (body) {string} price price of the product
 * @apiSuccess  (body) {string} description description of the product
 * @apiSuccess  (body) {string} quantity Quantity of the product
 * @apiSuccess  (body) {string} vendors vendors of the product
 * @apiSuccess  (body) {string} stock stock of one product
 * @apiSuccess  (body) {string} expires expire Date of the product
 * @apiSuccess  (body) {array} variant variant of product
 * @apiSuccess  (body) {string} offer offer of product
 * @apiError {Object} error Error response
 */
  .get(validate(productParam.get), productCntrl.get)

/**
   * @api {post} /api/product/{productId}/admin Update a Product (Admin)
   * @apiName Admin Update Product
   * @apiGroup Product
   * @apiVersion 1.0.0
   *
   * @apiParam (param) {string} productId _id of Product
   *
   * @apiParam (body) {string} name name of the product
   * @apiParam (body) {string} price price of the product
   * @apiParam (body) {string} description description of the product
   * @apiParam (body) {string} quantity Quantity of the product
   * @apiParam (body) {string} vendors vendors of the product
   * @apiParam (body) {string} stock stock of one product
   * @apiParam (body) {string} expires expire Date of the product
   * @apiParam (body) {array} variant variant of product
   * @apiParam (body) {string} offer offer of product
   *
   * @apiSuccess  {string} name name of the product
   * @apiSuccess  {string} price price of the product
   * @apiSuccess  {string} description description of the product
   * @apiSuccess  {string} quantity Quantity of the product
   * @apiSuccess  {string} vendors vendors of the product
   * @apiSuccess  {string} stock stock of one product
   * @apiSuccess  {string} expires expire Date of the product
   * @apiSuccess  {array} variant variant of product
   * @apiSuccess  {string} offer offer of product
   * @apiError    {Object} error Error response
   */
  .put(validate(productParam.update), productCntrl.update)

/**
   * @api {delete} /api/product/:productId/admin Delete a Product (Admin)
   * @apiName Delete Product (Admin)
   * @apiGroup Product
   * @apiVersion 1.0.0
   *
   * @apiParam (param) {String} productId _id of a Product
   *
   * @apiSuccess {String} _id ProductId of Product
   * @apiSuccess {String} name name of the Product
   * @apiError {Object} error Error response
   */

  .delete(validate(productParam.delete), productCntrl.remove)

router.param('productId', productCntrl.load)

module.exports = router
