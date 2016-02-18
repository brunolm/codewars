// http://www.codewars.com/kata/can-you-test-it-for-me

_describe('Foo', function() {
  it('instanceof', function() {
    Test.expect(foo instanceof Foo);
  });

  it('value should start at 0', function() {
    Test.assertEquals(foo.value, 0);
  });

  it('array should start with 1, 2, 3', function() {
    Test.assertSimilar(foo.array, [1, 2, 3]);
  });

  it('add should throw for invalid types', function() {
    Test.expectError('not a number', () => foo.add('5'));
  });
  
  it('add should not throw for valid types', function() {
    Test.expectNoError('valid number', () => foo.add(10));
  });
  
  it('add should increment value', function() {
    Test.assertEquals(foo.value, 10);
  });
  
  it('push should throw for invalid types', function() {
    Test.expectError('not a number', () => foo.push('10'));
  });
  
  it('push should include value', function() {
    Test.expectNoError('valid number', () => foo.push(10));
  });
  
  it('push should include value in the array', function() {
    Test.assertSimilar(foo.array, [1, 2, 3, 10]);
  });
});