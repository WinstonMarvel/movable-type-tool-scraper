// const app = require('express')();
const request = require('request'); 
const cheerio = require('cheerio');
const get_date = require('./cleanDate');
const get_date = require('./getLinks');
const write_string = require('./createExport')();

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