
const Router = require('express')
const validate = require('express-validation')
const Multer = require('multer')

const productParam = require('./product.param')
const productCntrl = require('./product.controller')

const { guardUser, adminCheck } = require('../../libs/jwToken')

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // no larger than 5mb, you can change as needed.
  }
})

const router = Router()

router.route('/')

/**
   * @api {get} /api/products Get Products List (User)
   * @apiName  Get Product list (User)
   * @apiGroup Products
   * @apiVersion 1.0.0
   *
   * @apiSuccess {Array} products[] List of product.
   * @apiError {Object} error Error response
   */

  .get(validate(productParam.list), productCntrl.list)

router.route('/:productId')
/**
 * @api {get} /api/products/:productId Get A Specific Product Details (User)
 * @apiName Get Product Details (User)
 * @apiGroup Products
 * @apiVersion 1.0.0
 *
 * @apiParam (param) {string} productId _id of Product
 *
 * @apiSuccess  {String} _id Id of the Product
 * @apiSuccess  {string} name name of the product
 * @apiSuccess  {string} price price of the product
 * @apiSuccess  {string} description description of the product
 * @apiSuccess  {array} measure measurement of the product
 * @apiSuccess  {string} vendors vendors of the product
 * @apiSuccess  {boolean} stock stock of one product
 * @apiSuccess  {string} expires expire Date of the product
 * @apiSuccess  {array} variant variant of product
 * @apiSuccess  {string} offer offer of product
 * @apiError {Object} error Error response
 */
  .get(validate(productParam.get), productCntrl.get)

router.route('/admin')

/**
   * @api {get} /api/products/admin Get Product List (Admin)
   * @apiName Get Product list (Admin)
   * @apiGroup Products
   * @apiVersion 1.0.0
   *
   * @apiSuccess {Array} products[] List of product.
   * @apiError {Object} error Error response
   */
  .get(guardUser(), adminCheck, validate(productParam.adminList), productCntrl.listAdmin)

/**
   * @api {post} /api/products/admin Create Products (Admin)
   * @apiName Create Products (Admin)
   * @apiGroup Products
   * @apiVersion 1.0.0
   *
   * @apiParam (body) {string} name name of the product
   * @apiParam (body) {string} price price of the product
   * @apiParam (body) {string} description description of the product
   * @apiParam (body) {array} measure measurement of the product
   * @apiParam (body) {string} vendors vendors of the product
   * @apiParam (body) {boolean} stock stock of one product
   * @apiParam (body) {string} expires expire Date of the product
   * @apiParam (body) {array} variant variant of product
   * @apiParam (body) {string} offer offer of product
   *
   * @apiSuccess  {String} _id Id of the Product
   * @apiSuccess  {string} name name of the product
   * @apiSuccess  {string} price price of the product
   * @apiSuccess  {string} description description of the product
   * @apiSuccess  {array} measure measurement of the product
   * @apiSuccess  {string} vendors vendors of the product
   * @apiSuccess  {string} stock stock of one product
   * @apiSuccess  {string} expires expire Date of the product
   * @apiSuccess  {array} variant variant of product
   * @apiSuccess  {string} offer offer of product
   * @apiError    {Object} error Error response
   */

  .post(guardUser(), adminCheck, multer.single('variant'), validate(productParam.create), productCntrl.create)

router
  .route('/admin/:productId')
  /**
 * @api {get} /api/products/admin/:productId Get a specific product Details for (Admin)
 * @apiName Get Product Details (Admin)
 * @apiGroup Products
 * @apiVersion 1.0.0
 *
 * @apiParam (param) {string} productId _id of Product
 *
 * @apiSuccess {String} _id Id of the Product
 * @apiSuccess {string} name name of the product
 * @apiSuccess {string} price price of the product
 * @apiSuccess {string} description description of the product
 * @apiSuccess {array} measure measurement of the product
 * @apiSuccess {boolean} stock stock of one product
 * @apiSuccess {string} expires expire Date of the product
 * @apiSuccess {array} variant variant of product
 * @apiSuccess {string} offer offer of product
 * @apiError {Object} error Error response
 */
  .get(guardUser(),
    adminCheck,
    validate(productParam.Adminget),
    productCntrl.get
  )

/**
   * @api {put} /api/products/admin/:productId Update a Product (Admin)
   * @apiName Update Product (Admin)
   * @apiGroup Products
   * @apiVersion 1.0.0
   *
   * @apiParam (param) {string} productId _id of Product
   *
   * @apiParam (body) {string} name name of the product
   * @apiParam (body) {string} price price of the product
   * @apiParam (body) {string} description description of the product
   * @apiParam (body) {array} measure measurement of the product
   * @apiParam (body) {string} vendors vendors of the product
   * @apiParam (body) {boolean} stock stock of one product
   * @apiParam (body) {string} expires expire Date of the product
   * @apiParam (body) {array} variant variant of product
   * @apiParam (body) {string} offer offer of product
   *
   * @apiSuccess  {String} _id Id of the Product
   * @apiSuccess  {string} name name of the product
   * @apiSuccess  {string} price price of the product
   * @apiSuccess  {string} description description of the product
   * @apiSuccess  {array} measure measurement of the product
   * @apiSuccess  {string} vendors vendors of the product
   * @apiSuccess  {boolean} stock stock of one product
   * @apiSuccess  {string} expires expire Date of the product
   * @apiSuccess  {array} variant variant of product
   * @apiSuccess  {string} offer offer of product
   * @apiError    {Object} error Error response
   */
  .put(guardUser(), adminCheck, validate(productParam.update), productCntrl.update)

/**
   * @api {delete} /api/products/admin/:productId Delete a Product (Admin)
   * @apiName Delete Product (Admin)
   * @apiGroup Products
   * @apiVersion 1.0.0
   *
   * @apiParam (param) {String} productId _id of a Product
   *
   * @apiSuccess {String} _id ProductId of Product
   * @apiSuccess {String} name name of the Product
   * @apiError {Object} error Error response
   */

  .delete(guardUser(), adminCheck, validate(productParam.delete), productCntrl.remove)

router.param('productId', productCntrl.load)

module.exports = router
