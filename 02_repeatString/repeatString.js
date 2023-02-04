

const repeatString = function(word, n) {
    let stringg = "";
if(n>0){
    for(i=0;i<n;i++) {
        console.log(i)
         stringg = stringg+word;
        }
        
}
else if(n==-1){
    stringg = "ERROR";
}
return stringg;

};

// console.log(repeatString());


// Do not edit below this line
module.exports = repeatString;
