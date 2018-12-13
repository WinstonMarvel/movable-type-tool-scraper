const request = require('request'); 
const rp = require('request-promise-native'); 
const cheerio = require('cheerio');
const getDate = require('./cleanDate');
const getFeaturedImage = require('./getFeaturedImage');
const config = require('./config.json');

var createPost = (body)=>{
	var post = {};
	const $ = cheerio.load(body);
	post.body = $(config.post.body).html();
	post.title = $(config.post.title).text();
	if(config.post.tags){ //Won't run if no tags
		post.tags = "";
		$("").each(function(){
			post.tags = post.tags + "\"" + $(this).text() + "\",";
		});
	}
	if(config.post.category){
		//Category processing
	}
	if(config.post.featuredImage && $(config.post.featuredImage).attr('src')){
		//Category processing
		post.featuredImage = getFeaturedImage($(config.post.featuredImage).attr('src'));
	}
	post.date = getDate($(config.post.date).html());
	return post;
};


module.exports = async function(url){
	var responseBody = await rp(url);
	return createPost(responseBody);
}