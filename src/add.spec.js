import add from './add';

describe('Add function', () => {
  it('adds two numbers', () => {
    expect(add(1,2)).toBe(3);
  });
});
