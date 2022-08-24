# compress-number-array

[![Downloads](https://img.shields.io/npm/dt/compress-number-array.svg)](https://npmcharts.com/compare/compress-number-array?minimal=true)
[![License](https://img.shields.io/npm/l/compress-number-array.svg)](https://www.npmjs.com/package/compress-number-array)

Compress and decompress arrays.

## Installation

```cmd
npm install compress-number-array --save
yarn add compress-number-array
```

## Usage

### Javascript

```javascript
let compressNumberArray = require("compressNumberArray")
let compressed = compressNumberArray([1, 1, 1, 2, 2, 3])
let decompressed = compressNumberArray(compressed)
```

```sh
# compressed
'1-10'

# decompressed
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### TypeScript

```typescript
import compressNumberArray from "compress-number-array"
const compressed = compressNumberArray([1, 1, 1, 2, 2, 3])
const decompressed = compressnumberArray(compressed)
```

```sh
# compressed
'1-10'

# decompressed
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

## Option

### Percentage

```typescript
import compressNumberArray from "compress-number-array"
const array = [1, 2, 3, 4, 5, 7, 8, 9, 10]
const result1 = compress(array, 100)
const result2 = compress(array, 0)
```

```sh
# result1
'1-5, 7-10'

# result2
'1-10'
```

## Test

```sh
npm run test
```
