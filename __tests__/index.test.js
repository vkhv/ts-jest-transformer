const path = require('path');
const TsJestTransformer = require('../');
const jestConfig = require('./jestconfig.json');

class MyTransformer extends TsJestTransformer {
    process(src, filename, config, options) {
        const source = 'export default ' + JSON.stringify(path.basename(filename)) + ';';
        return super.process(source, filename, config, options);
    }
}

describe('TsJestTransformer', () => {
    test('allows empty config', () => {
        expect(
            () => new MyTransformer().process('<svg>', 'bla.svg', null, null)
        ).toThrow(/tsconfig\.json/);
    });

    test('processes TS', () => {
        expect(
            new MyTransformer().process('<svg>', 'bla.svg', jestConfig, null)
        ).toMatch('exports["default"] = "bla.svg";');
    });
})
