const getLinks = require('./getLinks');
const getPosts = require('./getPosts');
const createExport = require('./createExport');


var exportData = [];

var links = getLinks();
links.map(async (link)=>{
	exportData.push(await getPosts(link));
	createExport(exportData);
});
