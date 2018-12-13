const fs = require('fs');
const path = require('path');

const endSection = "\n-----\n";
const endPost = "\n--------\n";


const createString = (postObjectArray, authorName)=>{
    var postString ="", title, date, body;
    postObjectArray.forEach((post)=>{
        author = "AUTHOR: " + authorName + "\n";
        title =  "TITLE: " + post.title + "\n";
        date = "DATE: " + post.date + "\n";
        tags = ("TAGS: " + post.tags).slice(0,-1); //Remove unecessary comma at the end 
        body = endSection + "BODY:\n" +  post.body + endSection;
        postString = postString + author + title + date + tags + body + endPost;
    });
    return postString;   
};

const writeToFile = (data, filename = "./export.txt")=>{
    fs.writeFileSync(path.resolve(filename), data);
};

module.exports = function(postObjectArray, author, filename){
   writeToFile(createString(postObjectArray, author), filename);
}