// O(n^2) time complexity
// O(1) space complexity

function containsDuplicate(nums: number[]): boolean {
    for(let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        for(let j = i + 1; j < nums.length; j++) {
            if(currentNum === nums[j]) {
                return true;
            }
        }
    }
    return false;
}

// Test cases
const test1 = [1, 2, 3, 1];
const test2 = [1, 2, 3, 4];
console.log(`Test 1 ([1,2,3,1]): ${containsDuplicate(test1)}`);
console.log(`Test 2 ([1,2,3,4]): ${containsDuplicate(test2)}`);