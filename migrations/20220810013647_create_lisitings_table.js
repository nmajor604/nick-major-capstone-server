/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('sellers', (table) => {
        table.increments('id').primary();
        table.string('sellerName').notNullable();
        table.string('location').notNullable();
        table.string('email').notNullable();
    })
    .createTable('listings', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('condition').notNullable();
        table.string('location').notNullable();
        table.string('description').notNullable();
        table.integer('price').notNullable();
        table.timestamp('posted_at').defaultTo(knex.fn.now());
        table
            .integer('seller_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('sellers')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.tinyint('status');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('listings').dropTable('sellers');
};
