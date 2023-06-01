function modifyArray(array, doubleValue) {
    return array.map(doubleValue);
}
var numbers = [1, 2, 6, 4, 5];
function doubleValue(value) {
    return value * 2;
}
var modifiedNumbers = modifyArray(numbers, doubleValue);
console.log(modifiedNumbers);
