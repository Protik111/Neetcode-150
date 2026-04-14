// O(n) time complexity
// O(n) space complexity
function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;
    const count: Record <string, number> = {};

    for(let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for(let char of t) {
        if(!count[char]) return false;
        count[char]--
    }

    return true;
};

// O(n log n) time complexity
// O(n) space complexity
function isAnagramSorting(s: string, t: string): boolean {
    if(s.length !== t.length) return false;
    const sSorted = s.split('').sort().join('');
    const tSorted = t.split('').sort().join('');
    return sSorted === tSorted;
}

// Test cases
console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))
