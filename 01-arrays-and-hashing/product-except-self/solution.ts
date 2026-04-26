// O(n^2) time complexity
function productExceptSelf(nums: number[]): number[] {
  const answers: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }

    answers[i] = product;
  }

  return answers;
}

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // [24, 12, 8, 6]
