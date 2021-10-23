const router = require('express').Router()
const movieRoutes = require('./movie')
const reviewRoutes = require('./reviews')

//"/api"
router.use('/movie', movieRoutes);

router.use('/reviews', reviewRoutes);

module.exports = router;