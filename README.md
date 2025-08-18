# MD-HTML parser (WIP)

**Warning**: work in progress!

A simple, yet extensible and powerful Markdown processor for typescript. Built for applications needing to update their markdown preview often.

## Usage

```typescript
import { MarkdownParser } from './parser.ts';

let parser = new MarkdownParser("# Test \n **bold**");
let output = parser.parse();
```

## Roadmap

- **Local updates** --- when Markdown code is updated, render only viable parts of output HTML code.
- **Standard implementation** --- full standard Markdown toolset.
- **New optional components** from outside of the standard.
