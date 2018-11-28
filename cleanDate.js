
var parse_date = (date) =>{ //Convert string to MT readable numeric date
    new_date = [];
    var monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var monthList_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    var month = monthList.indexOf(date[0]) + 1;
    month = month.toString();
    if(month.length == 1){
        month = "0" + month;
    }
    new_date.push(date[2]);
    new_date.push(date[1]);
    new_date.push(month);
    return new_date.join("/") + " 12:00:00 PM";
}

module.exports = function(raw){
    raw = raw[1].data; //Second half of node
    var str_arr = raw.split(' ');
    //Filter whitespaces, empty strings, useless words and day name
    str_arr = str_arr.filter(function(str){
        return str!=="on" && str!=="" && !str.match(/.*day/ig);  
    });
    //Clean string of commas,full stop and whitespaces
    str_arr = str_arr.map((str)=>{
        str = str.trim();
        str = str.replace(/[.,\s]/ig,"");
        return str;
    });
    return parse_date(str_arr);
}