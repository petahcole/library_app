const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const knex = require("./database-connection");
const port = process.env.PORT || 3000

app.listen(port, () =>   {
    console.log(`listening on ${port}`);
});

app.get("/books", (req, res, next) =>  {
    knex("books").then((data) => {
        res.json(data);
    })
})

app.get("/books/:id", (req, res, next) =>   {
    knex("books").where("id", req.params.id).first().then((data)=>   {
        res.json(data);
    })
})

app.post("/books", (req, res, next) => {
    console.log(req.body);
    knex("books").insert({
        "title": req.body.title,
        "author": req.body.author,
        "genre": req.body.genre,
        "read": req.body.read
    },"*").then((date) =>  {
        console.log("success!");
        res.json(data)
    })
})