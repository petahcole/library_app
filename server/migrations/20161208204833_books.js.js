
exports.up = function(knex, Promise) {
  return knex.schema.createTable("books", table => {
      table.increments();
      table.text("title");
      table.text("author");
      table.text("genre")
      table.boolean("read");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("books");
};
