const sumAll = function(start, end) {
    let sum = 0;
    let altStart;
    let altEnd;
    if (start < 0 || end < 0 || typeof start !== 'number' || typeof end !== 'number') {
        sum = 'ERROR';
    } else {
        if (start < end) {
            for (start; start <= end; start++) {
                sum += start;
            }
        } else {
            altStart = end;
            altEnd = start;
            for (altStart; altStart <= altEnd; altStart++) {
                sum += altStart;
            }
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
