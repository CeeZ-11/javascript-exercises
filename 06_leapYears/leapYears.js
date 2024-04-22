const leapYears = function(leapYears) {
    if((leapYears % 4 == 0 && leapYears % 100 != 0) || leapYears % 400 ==  0){
        return true;
    }else
    return false;
};

// Do not edit below this line
module.exports = leapYears;
