const reverseString = function(string) {
    string = string.split('');
    let result = [];
    for (const char of string) {
        result.unshift(char);
    }
    return result.join('');
};

// Do not edit below this line
module.exports = reverseString;
