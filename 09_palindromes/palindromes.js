const palindromes = function (str) {
    const charArray = str.toLowerCase().replace(/[^a-z0-9]/g, '').split('');
    return charArray.join('') === charArray.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
