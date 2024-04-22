const repeatString = function(string, num) {
    let result = '';
   
    if(num > 0){
        for(let x=0; x<num; x++)
        {
            result += string;
        }
    }else if( num == 0 || string == ''){
        return '';
    }else{
        return "ERROR";
    }

    return result;
   
};

// Do not edit below this line
module.exports = repeatString;
