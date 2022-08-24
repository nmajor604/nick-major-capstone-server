const knex = require('knex')(require('../knexfile').development);

exports.index = (_req, res) => {
  knex('listings')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Listings: ${err}`)
    );
};

exports.singleListing = (req, res) => {
  knex('listings')
    .where({ id: req.params.id })
    .then((data) => {
      if (!data.length) {
        return res.status(404).send(`Record with id: ${req.params.id} is not found`);
      }

      res.status(200).json(data[0]);
    })
    .catch((err) => 
      res.status(400).send(`Error retrieving listing ${req.params.id} ${err}`)
    );
};

exports.addListing = (req, res) => {
  if (!req.body.title || !req.body.condition || !req.body.location || !req.body.description || !req.body.price || !req.body.status) {
    return res.status(400).send('All fields are required');
  }
    knex('listings')
      .insert(req.body)
      .then((data) => {
        const newListingURL = `/listings/${data[0]}`;
        res.status(201).location(newListingURL).send(newListingURL);
      })
      .catch((err) => res.status(400).send(`Error creating listing: ${err}`));
};