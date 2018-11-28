// const app = require('express')();
const getLinks = require('./getLinks');
const getPosts = require('./getPosts');
const writeString = require('./createExport');


var url = "https://enmrpa.firmsitepreview.com/blog/2017/08/enm-law-news-custody-case-dismissed-in-favor-of-enm-law-client.shtml";

getPosts(url).then((post)=>{
	console.log(post);
})
