# language-colors

[![GitHub](https://img.shields.io/github/license/mika-f/language-colors?style=flat-square)](./LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@mikazuki/language-colors?style=flat-square)](https://www.npmjs.com/package/@mikazuki/language-colors)

GitHub programming language colors for JavaScript.

## Install

```
yarn add @mikazuki/language-colors
```

CDN : [UNPKG](https://unpkg.com/@mikazuki/language-colors) | [jsDelivr](https://cdn.jsdelivr.net/npm/@mikazuki/language-colors)

## How to use

### In Browser

```html
<script src="https://cdn.jsdelivr.net/npm/@mikazuki/language-colors"></script>
<script>
  const colors = window.LanguageColors;
  console.log(colors.Csharp);
</script>
```

### In Node.js

```typescript
import { Csharp } from "@mikazuki/language-colors";

console.log(Csharp); // => #178600
```

Some programming language names contains characters that are not allowed in the variable.  
These characters are replaced by the following table of equivalents:

| Before      | After   |
| ----------- | ------- |
| `^1`        | `One`   |
| ` ` (space) | Empty   |
| `-`         | Empty   |
| `'`         | Empty   |
| `#`         | `sharp` |
| `+`         | `plus`  |
| `*`         | `aster` |


For example, `1C Enterprise` is named as `OneCEnterprise`.