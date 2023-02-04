const reverseString = function(string) {
    // let string = "helo"
    let newstring="";
    
    for(i=string.length-1;i>=0;i--){
        newstring = newstring+string[i];
    }
    return newstring;
    
};
// console.log(reverseString("hello"));

// Do not edit below this line
module.exports = reverseString;
