test('2+3=5', () => {
    const sum = require('../src/sample/sum');
    expect(sum(2, 3)).toBe(5);
})

test('4+3=7', () => {
    const sum = require('../src/sample/sum');
    expect(sum(3, 4)).toBe(7);
})
