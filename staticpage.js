const path = require("path");
const express = require("express");
const app = express();

const staticPath = path.join(__dirname, "../Component");

app.use(express.static(staticPath));

const Port = 8002;

app.get("/", (req, res) => {
    res.send("Hello my friends");
});

app.listen(Port, () => {
    console.log("Server 8003 is running...");
});
