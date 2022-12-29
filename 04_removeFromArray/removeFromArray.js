const removeFromArray = function (array, ...remove) {
    const newArray = [];
    let equal = 0;
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < remove.length; j++) {
            if (array[i] === remove[j]) {
                equal = 1;
            }
        }
        if (equal === 0) {
            newArray.push(array[i]);
        }
        equal = 0;
    }
   
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
