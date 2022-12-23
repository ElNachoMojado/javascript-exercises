const reverseString = function(string) {
    let num=string.length;
    let letter;
    let revword;
    if (string === '') {
        return string;
    } else {
        for (i = num; i > 0; i--) {
            letter=string.slice(i-1, i);
            (i === num) ? revword = letter
            :revword += letter;
        }
        return revword;
    }
};

// Do not edit below this line
module.exports = reverseString;
