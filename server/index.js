const express = require("express");
const bc = require("./controllers/books_controller.js");
const app = express();

app.use(express.json());
const PORT = 4000;
app.listen(PORT, ()=>{

});