const fs = require('fs');
const path = require('path');

const endSection = "\n-----\n";
const endPost = "\n--------\n";


const createString = (postObjectArray)=>{
    var postString ="", author, title, date, body;
    postObjectArray.forEach((post)=>{
        author = "AUTHOR: Script Author\n";
        title =  "TITLE: " + post.title + "\n";
        date = "DATE: " + post.date + "\n";
        body = endSection + "BODY: " +  post.body + endSection;
        postString = postString + author + title + date + body + endPost;
    });
    console.log(postString);
    return postString;   
};

const writeToFile = (data, filename = "./export.txt")=>{
    fs.writeFileSync(path.resolve(filename), data);
};

module.exports = function(postObjectArray, filename){
   writeToFile(createString(postObjectArray), filename);
}