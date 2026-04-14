## Anagram
- Key idea:
    - Same letters ✔️
    - Same count ✔️
    - Different order ✔️

## Key Lessons
- Think of it like:

s → adds letters
t → removes letters

👉 If perfectly balanced → anagram
👉 If something goes negative / missing → not anagram

## Alternative
- Sorting
- O(n log n) time complexity (due to sorting - Sorting is O(n log n) because we repeatedly divide the data (log n) and do work on all elements (n) at each level.)
- O(n) space complexity (due to creating new strings)

## Complexity
- Time Complexity: $O(n)$ - Single pass through the strings.
- Space Complexity: $O(n)$ - In the worst case, we store all elements in the hash map.
