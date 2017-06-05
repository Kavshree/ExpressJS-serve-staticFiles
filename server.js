const express=require('express');
var app=express();
var path = require('path')
app.use('/static',express.static(__dirname + '/public'));
//console.log(path);

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen('4200',function(){
	console.log("server started at port 4200");
})