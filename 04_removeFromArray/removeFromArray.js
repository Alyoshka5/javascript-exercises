const removeFromArray = function(arr, ...rem) {
    return arr.filter(value => !(rem.includes(value)));
};

// Do not edit below this line
module.exports = removeFromArray;
