const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes); // use homeRoutes if no api call
router.use('/api', apiRoutes); // go into api routes otherwise

module.exports = router;
