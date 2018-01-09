var express = require("express");
var app = express();

app.set("view engine", "ejs")

app.get("/", function (req,res) {
    res.render("landing");
})

app.get("/campgrounds", function (req,res) {
    var campgrounds = [
        {name: "Simon Creek", img: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?dpr=1&auto=format&fit=crop&w=376&h=251&q=60&cs=tinysrgb"},
        {name: "Mountain Creek", img: "http://quilombokalunga.org.br/wp-content/uploads/2012/01/barracas_noite.jpg"},
        {name: "Simon River", img: "https://singlemomsincome.com/wp-content/uploads/2013/05/ID-100133829.jpg"},
        {name: "Shallow Creek", img: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?dpr=1&auto=format&fit=crop&w=376&h=251&q=60&cs=tinysrgb"}
    ];

    res.render("campgrounds", {campgrounds : campgrounds})
})

app.listen(3000, function(){
    console.log("YelpCamp server has started");
})