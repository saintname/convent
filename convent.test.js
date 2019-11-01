const convent = require('./convent.js')

test('input is 0', () => {
    expect(convent(0)).toEqual('$0');
});
test('input is 50', () => {
    expect(convent(50)).toEqual('$1.66');
});
test('input is 100', () => {
    expect(convent(100)).toEqual('$3.31');
});
test('it is from thailand', () => {
    expect(convent('it is from thailand')).toEqual('error');
});