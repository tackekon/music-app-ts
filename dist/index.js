"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 3000;
app.get("/topics", (req, res) => {
    res.send("Chủ đề bài hát");
});
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
