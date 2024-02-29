const express = require("express");
const app = express();

const PORT = 5000;

//middleware
app.set("view engine", "ejs");
app.use(express.static('public'));


app.get("/", function(req, res){
    res.render('home');
})

app.get("/hijagang", function(req, res){
    res.render('hijagang');
})

app.get("/luphounung", function(req, res){
  res.render('luphounung');
})

app.get("/marjing", function(req, res){
  res.render('marjing');
})

app.listen(PORT, ()=>{
	console.log(`App running on port ${PORT}`);
});
