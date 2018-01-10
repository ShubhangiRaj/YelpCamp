var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

var campgrounds = [
    {name: "Simon Creek", img: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?dpr=1&auto=format&fit=crop&w=376&h=251&q=60&cs=tinysrgb"},
    {name: "Mountain Creek", img: "http://quilombokalunga.org.br/wp-content/uploads/2012/01/barracas_noite.jpg"},
    {name: "Simon River", img: "https://singlemomsincome.com/wp-content/uploads/2013/05/ID-100133829.jpg"},
    {name: "Shallow Creek", img: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?dpr=1&auto=format&fit=crop&w=376&h=251&q=60&cs=tinysrgb"},
    {name: "Simon Creek", img: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?dpr=1&auto=format&fit=crop&w=376&h=251&q=60&cs=tinysrgb"},
    {name: "Mountain Creek", img: "http://quilombokalunga.org.br/wp-content/uploads/2012/01/barracas_noite.jpg"},
    {name: "Simon River", img: "https://singlemomsincome.com/wp-content/uploads/2013/05/ID-100133829.jpg"},
    {name: "Shallow Creek", img: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?dpr=1&auto=format&fit=crop&w=376&h=251&q=60&cs=tinysrgb"}
];

app.get("/", function (req,res) {
    res.render("landing");
})

app.get("/campgrounds", function (req,res) {
    res.render("campgrounds", {campgrounds : campgrounds})
})

// this route should show the form that will then go to post request
app.get("/campgrounds/new", function (req,res) {
    res.render("new");
})

// this is where we will get the form data and add it to the existing array and redirect to /campgrounds page
app.post("/campgrounds", function (req,res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
})

app.listen(3000, function(){
    console.log("YelpCamp server has started");
})