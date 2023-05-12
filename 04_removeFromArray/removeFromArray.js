const removeFromArray = function(array, ...removed) {
//convert second argument to an array
//loop through array and compare to "removed"
//if i = to "removed" delete from the array
    //may need to split & join somehow
//return the remaining array
    const newArray = [];
    array.forEach((item) => {
        if (!removed.includes(item)){
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
