const fs = require('fs');

var post2 = {
    title:
      'ENM Law News: Custody case dismissed in favor of ENM Law client',
     body: ' <p>A client came to see Attorney McAllister about a custody case filed by the father of her child in Berks County in December of 2016. Attorney McAllister quickly filed objections to the case on our client&apos;s assertion that the child had been living with her in New Jersey for more than 6 months prior to the filing of the custody action.</p><p>Why does that timeframe matter? The Uniform Child Custody Jurisdiction and Enforcement Act, which governs child custody in almost all states is the U.S., determines where a custody action can be filed - this is called venue. A custody action can generally be filed in the child&apos;s home county or the county where the child had previously been living if the child was still living there within 6 months of the commencement of proceedings and if a parent continues to live in that former county.</p> <p>Once Attorney McAllister filed an objection to the custody case on the basis that the Berks County venue was not appropriate, the judge scheduled a hearing to take testimony from witnesses about when the child moved to New Jersey. After hearing the evidence, the judge determined that the child had in fact been living in New Jersey for more than 6 months prior to the commencement of the custody action and dismissed the case. Attorney McAllister&apos;s experience and knowledge of custody law saved our client from having to travel to Berks County from New Jersey to defend against the custody case.</p><p>If a Berks County custody case has been filed against you, you need our knowledgeable Reading, PA custody attorneys to evaluate your case. Call us at 610-372-5128 or email at info@enmlaw.com.</p> ',
     author: '',
     date: '08/28/2008 12:00:00 PM'
};

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

const writeToFile = (data)=>{
    fs.writeFileSync("new_imp.txt", data);
};

module.exports = function(postObject){
   writeToFile(createString(postObject));
}