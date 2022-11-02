const router = require('express').Router();
const userRoutes = require('./userRoutes');
const petRoutes = require('./petRoutes');

router.use('/users', userRoutes); // Route to userRoutes
router.use('/pets', petRoutes); // Route to petRoutes

module.exports = router;
