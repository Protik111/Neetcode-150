# Takeaway - Contains Duplicate

## Problem Description
Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

## Logic & Strategy
- Use a Hash Set (or Hash Map) to store elements we have already encountered.
- For each element, check if it exists in the set.
- If it does, we found a duplicate.
- If we finish the loop without finding a duplicate, the array contains all unique elements.

## Complexity
- **Time Complexity**: $O(n)$ - Single pass through the array.
- **Space Complexity**: $O(n)$ - In the worst case, we store all elements in the set.

## Language Specific Notes
### TypeScript
- `Set` is efficient for lookups.

### Go
- Use a `map[int]bool` as a set since Go doesn't have a built-in Set type until recently (and even then, maps are the idiom).

## Key Lessons
- Hash-based lookups are $O(1)$ on average, making this approach very efficient compared to $O(n^2)$ nested loops.
