const fs = require('fs');
const path = require('path');

const createString = (postObject)=>{
    var author = "AUTHOR: Script Author\n";
    var title =  "TITLE: " + postObject.title + "\n";
    var date = "DATE: " + postObject.date + "\n";
    var separator = () => "\n-----\n";
    var body = separator() + " BODY: " +  postObject.body + separator();
    var post_string = author + title + date + body + "\n--------\n";
    console.log(post_string);
    return post_string;   
};

const writeToFile = (data, filename = "./export.txt")=>{
    fs.writeFileSync(path.resolve(filename), data);
};

module.exports = function(postObject, filename){
   writeToFile(createString(postObject), filename);
}