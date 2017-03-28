console.log("Inicio");
const express = require('express');
const app =express();
const bodyParser = require('body-parser');


//var quote = "quotes"
const url = 'mongodb://leandro:leandro@ds141410.mlab.com:41410/db_leandro';
var db;
var mongodb= require('mongodb');

var MongoClient= mongodb.MongoClient;
MongoClient.connect(url,(err, database)=>{
	if(err) return console.log(err)
	db=database
	app.listen(3000, ()=>{
						console.log('Porta 3000 OK')
	})
	//bla
})

	//new mongodb.Collection(quote)
//------------PATH e CALLBACK-----------------
//app.get(path, callback);
/*
PATH=The first argument, path, is the path of the GET request. It’s anything that comes after your domain name.
When we’re visiting localhost:3000, our browsers are actually looking for localhost:3000/. The path argument in this case is /.
CALLBACK=The second argument is a callback function that tells the server what to do when the path is matched. It takes in two arguments, a request object and a response object:
*/
//-------------Metodo READ (CRUD)-------------
/*app.get('/',function(request, response	){
		res.send('Hello World')
	}
)
------------Versão desse codigo em ES6--------
app.get('/', (req,res) =>{
		res.send('Hello World')
	}
)
*/
// Note: request and response are usually written as req and res respectively.

//------> Utilizar o bodyParser antes dos cruds!!!!! <-----
app.use(bodyParser.urlencoded({extended: true}));
// Agora vem os "handlers"

//-------------Metodo READ (CRUD)-------------
app.get('/', (req,res)=>{
	res.sendFile(__dirname + '/index.html');

})
//-------------Metodo CREATE (CRUD)-------------
//var namevar = "name"
//var quotesvar = "quotes"

//var nameCollection =  mongodb.Collection(namevar);
//var quotesCollection =  mongodb.Collection(quotesvar);

//db.createCollection('quotes')
app.post('/quotes',(req,res)=>{
//function saveData(db, res){
	//new Mongo.Collection('quotes');
	var doc = {"name": "pao", "quote": "morreu"}
	db.createCollection('paopoapo')
	db.quotes.insert({"name":"ze"},(err,result)=>{
			if(err) return console.log(err);
			console.log('saved to database');
			res.redirect('/');
	})
	/*nameCollection.insert({'name': req.body.Name},(err,result)=>{
			if(err) return console.log(err);
			console.log('name saved to database');
			res.redirect('/');
			
			//function(result, err) {   // callback
	        console.dir(result);
	        db.close();
	    	//}
    })

    quotesCollection.insert({'quotes': req.body.Name},(err,result)=>{
			if(err) return console.log(err);
			console.log('quote saved to database');
			res.redirect('/');
			
			//function(result, err) {   // callback
	        console.dir(result);
	        db.close();
	    	//}
    })*/
	
})