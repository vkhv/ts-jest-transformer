# `ts-jest-svg-png-transformer` transformer svg and png files 


## Usage

Run

```console
yarn add ts-jest-svg-png-transformer --dev
```

then create your custom transformer:

and finally add the according `jest` config:

```json
{
    "transform": {
        "\\.(svg|png)$": "<rootDir>/node_modules/ts-jest-svg-png-transformer/index.ts",

    },
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js"
    ]
}
```

