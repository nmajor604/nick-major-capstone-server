const router = require('express').Router();
const listingsController = require('../controllers/listingController');

router
    .route('/')
    .get(listingsController.index)
    .post(listingsController.addListing);

router
    .route('/:id')
    .get(listingsController.singleListing);


module.exports = router;