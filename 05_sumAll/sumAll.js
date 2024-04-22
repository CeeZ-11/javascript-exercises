const sumAll = function(a, b) {
    let result = 0;
        if(a < 0 || isNaN(b) || typeof b !== 'number'){
            return 'ERROR';
        }else if(a > b){
            for(let x=b; x<=a; x++){
                result += x;
            }
            return result;
        }
        else{
            for(let x=a; x<=b; x++){
                result += x;
            }
            return result;
        }
};

// Do not edit below this line
module.exports = sumAll;
