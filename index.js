const express = require("express"),  app = express() ,cors = require("cors");

app.use(cors());
app.use(express.json())
app.use("/", require("./router"))

app.listen(3006, ()=> console.log("server onAir => 3006"))