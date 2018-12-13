const getLinks = require('./getLinks');
const getPosts = require('./getPosts');
const createExport = require('./createExport');


var exportData = [];

var links = getLinks();

links.map(async (link)=>{
	try{
		exportData.push(await getPosts(link));
		createExport(exportData, "Ryan McAllister");
	}
	catch(error){
		console.log("\n" + "Error: " + error);
		console.log("Link: " + link + "\n");
	}
});

console.log("Total Links carried over: " + links.length);