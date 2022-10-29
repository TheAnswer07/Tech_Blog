const router = require('express').Router();

router.use('/api', require('./userRoutes'));
router.use('/api', require('./postRoutes'));
router.use('/api', require('./noteRoutes'));

module.exports = router;