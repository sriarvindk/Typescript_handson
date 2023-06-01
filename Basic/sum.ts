function calculateSum(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  
  const numbers = [1, 2, 3, 4, 5];
  console.log("Sum:", calculateSum(numbers));