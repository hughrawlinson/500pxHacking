var cameras = {};
var username = "HughRawlinson1"

var maxpage = 1000;

function process(page){
	if(page <= maxpage){
		$.ajax("https://api.500px.com/v1/photos?feature=user&username="+username+"&consumer_key=dvjPTm8TZS9WY6IUIupovlws1Dbj88QFbfc0vVSp&page="+page).done(
			function(a){
				maxpage = a.total_pages;
				for(var i = 0; i < a.photos.length; i++){
					cameras[a.photos[i].camera] = cameras[a.photos[i].camera]+1 || 1; 
				}
				process(page+1)
			}
		);
	}
}

process(1);