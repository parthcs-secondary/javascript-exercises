const removeFromArray = function(numbers, ...element) {
    for(i=0;i<=numbers.length;i++){
        console.log("this is i right now:" + i);
        for(j = 0; j<arguments.length;j++){
            console.log("this is j right now:" + j);
            if(numbers[i] === element[j]){
                console.log("they matched" + i + " " + j);
                numbers_new = numbers.splice(i,1);
              }
        }

    }
    return numbers;
};

console.log(removeFromArray([1,2,3,4], 3,2));

// Do not edit below this line
module.exports = removeFromArray;
