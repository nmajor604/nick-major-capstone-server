/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 const listingsData = require('../seed_data/listings_data');
 const sellersData = require('../seed_data/sellers_data');
 
 exports.seed = function (knex) {
   return knex('listings')
     .del()
     .then(function () {
       return knex('listings').insert(listingsData);
     })
     .then(() => {
       return knex('sellers').del();
     })
     .then(() => {
       return knex('sellers').insert(sellersData);
     });
 };

