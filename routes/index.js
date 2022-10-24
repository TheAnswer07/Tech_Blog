const router = require('express').Router();

router.use('/api', require('./userRoutes'));
router.use('/api', require('./postRoutes'));
//other routes go here too

module.exports = router;