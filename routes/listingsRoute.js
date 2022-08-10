const router = require('express').Router();
const listingsController = require('../controllers/listingController');

router.route('/').get(listingsController.index);

module.exports = router;