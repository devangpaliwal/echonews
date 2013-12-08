var nom = require('nom');


function echonews(){
	nom('http://echojs.com', function(err, $) {
		  var titleList=$('#newslist h2'); // => "Google"
		  var len = titleList.length;
		 for(var i=0; i<len ; i++){
		 	console.log(i+1+" "+$(titleList[i]).text());
		 }
	});	
}


module.exports = echonews;