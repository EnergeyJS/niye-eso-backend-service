const express = require('express')
const productRoutes = require('./api/product/product.route')
const orderRoutes = require('./api/Order/order.route')
const userRoutes = require('./api/user/user.route')
const authRoutes = require('./api/auth/auth.route')

const router = express.Router()

router.get('/', (req, res) => res.send('OK'))

router.use('/users', userRoutes)

router.use('/auth', authRoutes)

/**
 * @apiDescription Mounts product routes at /products
 * @apiGroup Products
 */

router.use('/products', productRoutes)
router.use('/order', orderRoutes)

module.exports = router
