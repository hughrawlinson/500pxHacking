var request = require('request');
var histogram = {};
var username = process.argv[2];
var property = process.argv[3];

// validation
var validProperties = [
	"id",
	"user_id",
	"name",
	"description",
	"camera",
	"lens",
	"focal_length",
	"iso",
	"shutter_speed",
	"aperture",
	"times_viewed",
	"rating",
	"status",
	"created_at",
	"category",
	"location",
	"latitude",
	"longitude",
	"taken_at",
	"hi_res_uploaded",
	"for_sale",
	"width",
	"height",
	"votes_count",
	"favorites_count",
	"comments_count",
	"nsfw",
	"sales_count",
	"for_sale_date",
	"highest_rating",
	"highest_rating_date",
	"license_type",
	"converted",
	"collections_count",
	"crop_version",
	"privacy",
	"image_url",
	"url",
	"positive_votes_count",
	"converted_bits",
	"image_format"
];

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

var API500px = require('500px'),
    api500px = new API500px(process.env.FIVE_HUNDRED_PIXELS_KEY);

function run(page){
	api500px.photos.getByUsername(username,{page:page},function(error,results){
		if(error){
			console.error(error);
			process.exit();
		}
		else{
			for(var i = 0; i < results.photos.length;i++){
				histogram[results.photos[i][property]] = histogram[results.photos[i][property]]+1 || 1;
			}
			if(page < results.total_pages){
				run(page+1);
			}
			else{
				console.log(histogram);
			}
		}
	});
}

run(1);