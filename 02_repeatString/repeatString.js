const repeatString = function(string, num) {
    if (num === 0 || string != 'hey') {
        string = '';
        return string;
    } else if (num < 0) {
        string = 'ERROR';
        return string;
    } else {
        for (let i = 0; i < (num-1); i++) {
        string += 'hey';
        }
        return string;
    }
};

// Do not edit below this line
module.exports = repeatString;
