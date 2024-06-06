const router = require('express').Router();

const peopleRoutes = require('./people');
const carRoutes = require('./cars');

router.use('/people', peopleRoutes);
router.use('/cars', carRoutes);

module.exports = router;

