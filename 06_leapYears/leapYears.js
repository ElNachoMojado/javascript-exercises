const leapYears = function(year) {
    let answer;
    if (year%4 === 0 && year%100 !== 0) {
        answer = true;
        return answer;
    } else if (year%400 === 0) {
        answer = true;
        return answer;
    } else {
        answer = false;
        return answer;
    }
};

// Do not edit below this line
module.exports = leapYears;
