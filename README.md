# Neetcode 150 - TS & Go

Consistency tracker for Neetcode 150 problems solved in TypeScript and Golang.

## Project Structure

Each problem is organized within its category folder:

```text
category-name/
└── problem-name/
    ├── solution.ts
    ├── solution.go
    └── takeaway.md
```

## How to Run

### TypeScript
We use `tsx` to run TypeScript files directly without a manual compile step.
```bash
npx tsx <path-to-file>.ts
```

### Go
Run Go files directly using `go run`.
```bash
go run <path-to-file>.go
```

## Guidelines
1. **Consistency**: Solve every problem in both TS and Go.
2. **Takeaways**: Write down the core logic, time/space complexity, and any new things learned in `takeaway.md`.
3. **Naming**: Use descriptive names for folders (kabab-case).
