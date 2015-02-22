var request = require('request');

var histogram = {};
var username = process.argv[2];
var property = process.argv[3];

var validProperties = ["id","user_id","name","description","camera","lens","focal_length","iso","shutter_speed","aperture","times_viewed","rating","status","created_at","category","location","latitude","longitude","taken_at","hi_res_uploaded","for_sale","width","height","votes_count","favorites_count","comments_count","nsfw","sales_count","for_sale_date","highest_rating","highest_rating_date","license_type","converted","collections_count","crop_version","privacy","image_url","url","positive_votes_count","converted_bits","image_format"];

// validation
if(process.env.FIVE_HUNDRED_PIXELS_KEY===null){
	console.error("Please put your 500px Application key in your environmental variables as \"FIVE_HUNDRED_PIXELS_KEY\"");
	process.exit();
}
if(username === null || username === ""){
	console.error("Invalid user");
	process.exit();
}
if(validProperties.indexOf(property)==-1){
	console.error("Your selected photo property is invalid");
	process.exit();
}

var maxpage = 1000;

function run(page){
	if(page <= maxpage){
		request("https://api.500px.com/v1/photos?feature=user&username="+username+"&consumer_key="+process.env.FIVE_HUNDRED_PIXELS_KEY+"&page="+page,
			function(b,a){
				a = JSON.parse(a.body);
				if(a.photos !== undefined){
					maxpage = a.total_pages;
					for(var i = 0; i < a.photos.length; i++){
						histogram[a.photos[i][property]] = histogram[a.photos[i][property]]+1 || 1; 
					}
					run(page+1);
				}
				else{
					console.error(a);
					process.exit();
				}
			});
	}
	else{
		console.log(histogram);
	}
}

run(1);