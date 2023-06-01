function calculateSum(numbers) {
    return numbers.reduce(function (sum, num) { return sum + num; }, 0);
}
var numbers = [1, 2, 3, 4, 5];
console.log("Sum:", calculateSum(numbers));
