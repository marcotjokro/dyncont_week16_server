const express = require("express");
var app = express();

const port = process.env.PORT || 3001;

//const is similar to var
//if you use const, that variable can't be change again, it's constant

//let is similar to var, between var and const
//let means this variable name can't be used again, but you can still change the value of the variables in the future

//node index.js to start server
//control + z to stop server

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get("/awesome", function(req, resp){
	resp.end("You are awesome!");
	//can be route to other html file
});

var names = [];

app.get("/name/:the_name", function(req, resp){
	var the_name = req.params.the_name;
	
	names.push(the_name);
	resp.send(names);
});

app.listen(port, function(err){
	if(err){
		console.log("Something is wrong");
		return false;
	} 
	console.log("Port is ready for hacks");
});

