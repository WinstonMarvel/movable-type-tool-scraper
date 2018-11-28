const fs = require('fs');
const path = require('path');

module.exports = function(filePath = "./list.txt"){
	fileContents = fs.readFileSync(path.resolve(filePath), 'utf8');
	var listOfLinks = fileContents.split('\n');
	listOfLinks = listOfLinks.map(function(link){
		return link.trim();
	});
	return listOfLinks;
};