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

