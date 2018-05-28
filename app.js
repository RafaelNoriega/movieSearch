var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");
var movie = "";

app.get("/", function(req, res){
	res.render("search");
});

app.get("/results", function(req,res){
		console.log(req.query.search);
		var search = req.query.search;
		var url =  "http://www.omdbapi.com/?apikey=thewdb&s=" + search;
		request( url ,function(error,result,body){
		if(!error && result.statusCode == 200){
			var data = JSON.parse(body);
			res.render("results",{data:data});
		}
		else{
			console.log("ERROR");
		}
	});
});
	

app.listen(3000, function(){
	console.log("server running");
});