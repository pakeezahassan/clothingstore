const express=require("express");

cont app =express();
app.use(express.json())

//Route imports
const product=require("./routes/productRoute");

app.use("/api/v1",product);

module.exports=app;
