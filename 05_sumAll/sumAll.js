const sumAll = function (number1, number2) {
    let startLimit = 0;
    let endLimit = 0;
    let dumb = [90, 10]
    let sum = 0;

    if(typeof (number1) != "number" || typeof (number2) != "number") {
        sum = "ERROR";
    }else if (Math.sign(number1) == -1 || Math.sign(number2) == -1) {
        sum = "ERROR";
    }else if (number1 > number2) {
        endLimit = number1;
        startLimit = number2;
        for(i = startLimit; i<endLimit+1;i++){
            sum= sum+i;
        }
    }else if (number1 < number2) {
        endLimit = number2;
        startLimit = number1;
        for(i = startLimit; i<endLimit+1;i++){
            sum= sum+i;
        }
    }


    


    return sum;

};

// Do not edit below this line
module.exports = sumAll;
