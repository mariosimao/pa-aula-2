const express = require("express");
const path = require('path');

const app = express();

const server = app.listen(8080, () => {
    console.log("ao vivo e a cores!");
});

app.get("/", (request, response) => {
    // response.send("Hello, World!");
    response.sendFile(path.join(__dirname + '/index.html'))
});