const request = require('request'); 
const rp = require('request-promise-native'); 
const cheerio = require('cheerio');
const getDate = require('./cleanDate');

var createPost = (body)=>{
	var post = {};
	const $ = cheerio.load(body);
	post.body = $(".postContent div").html();
	post.title = $("h1.page-title").text();
	post.date = getDate($('p.byline').contents().filter(function() {
	    return this.type === 'text';
	}));
	return post;
};


module.exports = async function(url){
	var responseBody = await rp(url);
	console.log(createPost(responseBody));
}