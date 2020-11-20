// app.js
const app = require("express")();

app.get("/", (req, res) => res.send({ message: "hello!", stamp: new Date() }));

app.listen(process.env.PORT || 3000)
console.log("running")
