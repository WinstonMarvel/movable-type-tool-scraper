var monthList = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
var monthList_short = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];

var dateFormat;

var parse_date = (date) =>{ //Convert string to MT readable numeric date
    var new_date = [];
    var month = monthList.indexOf(date[2].toLowerCase()) + 1;
    var day = date[0].toString();
    if(month.toString().length == 1){
        month =  "0" + month.toString();
    }
    if(day.length == 1){
        day = "0" + day;
    }
    new_date.push(date[2]);
    new_date.push(day);
    new_date.push(month);
    return month.toString() + "/" + day + "/" + date[2].toString() + " 12:00:00";
}

module.exports = function(raw){
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















// var parse_date = (date) =>{ //Convert string to MT readable numeric date
//     new_date = [];
//     var monthList = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
//     var monthList_short = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];
//     var month = monthList.indexOf(date[0].toLowerCase()) + 1;
//     if(month.toString().length == 1){
//         month =  "0" + month.toString();
//     }
//     if(date[1].toString().length == 1){
//         date[1] = "0" + date[1].toString();
//     }
//     new_date.push(date[2]);
//     new_date.push(date[1]);
//     new_date.push(month);
//     return month.toString() + "/" + date[1].toString() + "/" + date[2].toString() + " 12:00:00";
// }

// module.exports = function(raw){
//     raw = raw[1].data; //Second half of node
//     var str_arr = raw.split(' ');
//     //Filter whitespaces, empty strings, useless words and day name
//     str_arr = str_arr.filter(function(str){
//         return str!=="on" && str!=="" && !str.match(/.*day/ig);  
//     });
//     //Clean string of commas,full stop and whitespaces
//     str_arr = str_arr.map((str)=>{
//         str = str.trim();
//         str = str.replace(/[.,\s]/ig,"");
//         return str;
//     });
//     return parse_date(str_arr);
// }