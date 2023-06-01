function modifyArray(array: number[], doubleValue: (value: number) => number): number[] {
    return array.map(doubleValue);
}
const numbers = [1, 2, 6, 4, 5];
function doubleValue(value: number): number {
    return value * 2;
}
const modifiedNumbers = modifyArray(numbers, doubleValue);
console.log(modifiedNumbers);

