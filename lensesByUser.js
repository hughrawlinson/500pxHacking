var request = require('request');

var lenses = {};
var username = process.argv[2];
console.log(username);

var maxpage = 1000;

function run(page){
	if(page <= maxpage){
		request("https://api.500px.com/v1/photos?feature=user&username="+username+"&consumer_key="+process.env.FIVE_HUNDRED_PIXELS_KEY+"&page="+page,
			function(b,a){
				a = JSON.parse(a.body);
				if(a.photos !== undefined){
					maxpage = a.total_pages;
					for(var i = 0; i < a.photos.length; i++){
						lenses[a.photos[i].lens] = lenses[a.photos[i].lens]+1 || 1; 
					}
					run(page+1);
				}
				else{
					console.log(a);
				}
			});
	}
	else{
		console.log(lenses);
	}
}

run(1);