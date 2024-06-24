// The methods are same but when an object or array is passed in res.json()
// will also convert non-object, such asnull, undefined which is not a valid json

const express = require("express");
const app = express();
const jdata = require("./data.json");

const PORT = 8001;

app.get("/", (req, res) => {
    res.send([{ ramu: 69 }, { tinku: 70 }, { pinku: 71 }]);
    // res.status(200).json(jdata);
});

app.get("/query", (req, res) => {
    // res.json([{ ramu: 69 }, { tinku: 70 }, { pinku: 71 }]);
    res.status(200).json(jdata);
});

app.listen(PORT, () => {
    console.log("Server is Running at post 8001");
});
