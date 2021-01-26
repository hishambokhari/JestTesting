const functions = require ('./functions');

test('Add 2 + 2 to equal 4', () => {
  expect(functions.add(2,2)).toBe(4);
});

test('Add first name and last name', () => {
  expect(functions.name("Hisham","Bokhari")).toBe("Hisham Bokhari");
});

test('Should be Null', () => {
  expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});