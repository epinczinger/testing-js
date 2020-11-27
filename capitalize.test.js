const capitalize = require('./capitalize');

test('sugar should return Sugar', () => {
    expect(capitalize('sugar').toBe('Sugar'));
});