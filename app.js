// app.js
const app = require("express")();

app.get("/", (req, res) => res.send({ message: "hello!", stamp: new Date().toJSON() }));

// app.get("/env", (req, res) => res.send(process.env));

app.listen(process.env.PORT || 3000);
console.log("running");
