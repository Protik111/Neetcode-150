# NeetCode 150 - TS & Go

> Consistent problem-solving in TypeScript and Golang.

This repository tracks my journey through the [NeetCode 150](https://neetcode.io/practice), implemented using two different paradigms: the flexibility of **TypeScript** and the performance/simplicity of **Go**.

## Repository Structure

Problems are categorized by topic and follow a consistent layout:

```text
📂 [category-name]/
   └── 📂 [problem-name]/
       ├── 📄 solution.ts      # TypeScript implementation
       ├── 📄 solution.go      # Go implementation
       └── 📄 takeaway.md      # Logic, complexity, and learnings
```

## Tech Stack & Tools

- **TypeScript**: Direct execution via [`tsx`](https://github.com/privatenumber/tsx).
- **Go**: Native standard library.
- **Package Manager**: `pnpm`.
- **Consistency**: Detailed takeaways for every problem.

## How to Run

### TypeScript
```bash
# From the problem directory
npx tsx solution.ts

# From the root (using pnpm)
pnpm tsx 01-arrays-and-hashing/contains-duplicate/solution.ts
```

### Go
```bash
# From the problem directory
go run solution.go

# From the root
go run 01-arrays-and-hashing/contains-duplicate/solution.go
```

## Guidelines

1. **Dual Language**: Every problem must be solved in both TS and Go.
2. **Analysis First**: Complexity ($O(n)$) and logic must be documented in `takeaway.md`.
3. **Clean Code**: Follow idiomatic patterns for both languages.

---
*Happy Coding!*
