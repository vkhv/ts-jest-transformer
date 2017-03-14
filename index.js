const path = require('path');
const { transpileIfTypescript } = require('ts-jest');

class TsJestTransformer {
  process(src, filename, config, options) {
    return transpileIfTypescript(`${filename}.ts`, src, config && config.globals);
  }
}

module.exports = TsJestTransformer;
