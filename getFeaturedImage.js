const cheerio = require('cheerio');
const fs = require('fs');
const config = require('./config.json');
const request = require('request'); 

function GetFilename(url)
{
   if (url)
   {
      var m = url.toString().match(/.*\/(.+?\..*)/);
      if (m && m.length > 1)
      {
         return m[1];
      }
   }
   return "";
};

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);
    console.log('Filename:', filename);
    request(uri).pipe(fs.createWriteStream("./" + config.path.outPutImages + "/" + filename)).on('close', callback);
  });
};

module.exports = function(url){
	var fileName = GetFilename(url);
	download(url, fileName, function(){
		console.log("Image present and downloaded");
	});
	return '<img src="'+ fileName + '" class="blog-img" />';
};