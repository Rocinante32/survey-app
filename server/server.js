const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const db = require("./db");
const uidSafe = require("uid-safe");

app.use(compression());

app.use(
    express.urlencoded({
        extended: true,
    }),
    express.json()
);

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
