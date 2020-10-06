//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");



const app = express();



app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",function(req,res){

  res.sendFile(__dirname+"/index.html");
});

app.get("/palliative-care", function(req,res){
  res.sendFile(__dirname+"/palliative.html")

})

app.get("/elderly-care", function(req,res){
  res.sendFile(__dirname+"/elderly.html")

})

app.get("/comfort-care", function(req,res){
  res.sendFile(__dirname+"/comfort.html")

})


app.get("/blog", function(req,res){
  res.sendFile(__dirname+"/blog.html")

})







app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
