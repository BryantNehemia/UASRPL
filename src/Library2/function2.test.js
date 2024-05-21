import { multiply } from './function2';

describe('multiply', () => {
  test('multiplies 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('multiplies -1 * 5 to equal -5', () => {
    expect(multiply(-1, 5)).toBe(-5);
  });

  test('multiplies 0 * 7 to equal 0', () => {
    expect(multiply(0, 7)).toBe(0);
  });

  test('multiplies -2 * -3 to equal 6', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  test('multiplies 10 * 10 to equal 100', () => {
    expect(multiply(10, 10)).toBe(100);
  });
});
