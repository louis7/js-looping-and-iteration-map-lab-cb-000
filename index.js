// Code your solution in this file.
function lowerCaseDrivers(array, callback) {
    const newArr = [];

    for (const element of array) {
        newArr.push(callback(element));
    }

    return newArr;
}
