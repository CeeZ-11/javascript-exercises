const fibonacci = function(n) {
    let a = 0;
    let b = 1;
    let result = 0;
    n = Number(n);

    if(n == 0){
        return 0;
    }else if(n < 0){
        return "OOPS";
    }else if(n == 1){
        return 1;
    }

    for(let x=1; x<n; x++){
        result = a + b;
        a = b;
        b = result; 
    }

    return result;
};

// Do not edit below this line
module.exports = fibonacci;
