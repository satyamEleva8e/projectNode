// GET(read), POST(Create), PUT(Update), delete(Delete)

//import express
const express = require("express");

// call exprexx function and assing in a variale
const app = express();

// set a port number
const PORT = 8000;

// app.API_Method(route, callback)
// The classback funtion has 2 parameters, request(req) and response(res).
// The rquest Object(req) represents the HTTP request and has properties for the request String, parameters, body, HTTP Headers, etc
app.get("/", (req, res) => {
    res.send("Hello Friends");
});

app.listen(PORT, () => {
    console.log("Server is Running! at Port 8000");
});
