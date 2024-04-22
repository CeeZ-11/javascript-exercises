const getTheTitles = function(books) {
    let arr = [];
    for(let x=0; x<books.length; x++){
        arr.push(books[x].title);
    }
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
