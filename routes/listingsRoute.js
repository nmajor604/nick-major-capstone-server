const router = require('express').Router();
const listingsController = require('../controllers/listingController');

router.route('/').get(listingsController.index);

router.route('/:id').get(listingsController.singleListing);

router.route('/:id').post(listingsController.addListing);

module.exports = router;