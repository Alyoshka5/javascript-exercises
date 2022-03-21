const palindromes = function (string) {
    string = string.toLowerCase().split('').filter(char => char.match(/[a-z]/));
    const reversed = string.reduce((arr, char) => char.concat(arr), ['']);
    return string.join('') == reversed;
};

// Do not edit below this line
module.exports = palindromes;
