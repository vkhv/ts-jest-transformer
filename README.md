# `ts-jest` transformer base class

[![Build Status](https://travis-ci.org/joscha/ts-jest-transformer.svg?branch=master)](https://travis-ci.org/joscha/ts-jest-transformer)

A base class that can be used to implement a transformer for use with [ts-jest](https://github.com/kulshekhar/ts-jest).

## Usage

Run

```console
yarn add ts-jest-transformer --dev
```

then create your custom transformer:

```js
// my-transformer.js

const path = require('path');
const TsJestTransformer = require('ts-jest-transformer');

class MyFileBaseNameTransformer extends TsJestTransformer {
    process(src, filename, config, options) {
        // Write TS here
        const source = 'export default ' + JSON.stringify(path.basename(filename)) + ';';
        return super.process(source, filename, config, options);
    }
}

module.exports = new MyFileBaseNameTransformer();
```

and finally add the according `jest` config:

```json
{
    "transform": {
        "\\.(svg)$": "<rootDir>/my-transformer.js",
        "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js"
    ]
}
```