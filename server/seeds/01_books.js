
exports.seed = function(knex, Promise) {
  return knex('books').del()
    .then(function () {
      const myBooks = [{
        "title": "Return of the King",
        "author": "JRR Tolkein",
        "genre": "Fantasy",
        "read": true
      },{
        "title": "Les Miserables",
        "author": "Victor Hugo",
        "genre": "Historical Fiction",
        "read": false
      },{
        "title": "Name of the Wind",
        "author": "Patrick Rothfuss",
        "genre": "Fantasy",
        "read": true
      },{
        "title": "We Were the Mulvaneys",
        "author": "Joyce Carol Oats",
        "genre": "American Fiction",
        "read": false
      },{
        "title": "Secrets of a Javascript Ninja",
        "author": "John Resig",
        "genre": "Technology",
        "read": false
      }];
return knex("books").insert(myBooks);
    });
};
