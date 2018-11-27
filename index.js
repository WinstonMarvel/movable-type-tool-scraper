const app = require('express')();
const get_date = require('./clean_date');
const write_string = require('./write_string')();
const cheerio = require('cheerio');
const request = require('request'); 

var url = "https://enmrpa.firmsitepreview.com/blog/2017/08/enm-law-news-custody-case-dismissed-in-favor-of-enm-law-client.shtml";

var post = {
	title: "",
	body: "",
	author : "",
	date : ""
}


 
// request(url, (error, response, body)=>{
// 	const $ = cheerio.load(body);
// 	post.body = $(".postContent div").html();
// 	post.title = $("h1.page-title").text();
// 	post.date = get_date($('p.byline').contents().filter(function() {
// 	    return this.type === 'text';
// 	}));
// 	console.log(post);
// });



/*Script logic outline
	Make Request()
	Store JSON()
	ConvertJSON()
	WriteTextFile()
*/ 