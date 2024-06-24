// The methods are same but when an object or array is passed in res.json() will also convert non-object, such asnull, undefined which is not a valid json

const express = require("express");
const app = express();

const PORT = 8001;

app.get("/", (req, res) => {
    res.send([{ ramu: 69 }, { tinku: 70 }, { pinku: 71 }]);
});

// app.get("/", (req, res) => {
//     res.json([{ ramu: 69 }, { tinku: 70 }, { pinku: 71 }]);
// });

app.listen(PORT, () => {
    console.log("Server is Running at post 8001");
});
