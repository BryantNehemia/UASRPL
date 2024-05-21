import { add, subtract } from './function';

describe('add', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('adds -1 + 1 to equal 0', () => {
    expect(add(-1, 1)).toBe(0);
  });

  test('adds 0 + 0 to equal 0', () => {
    expect(add(0, 0)).toBe(0);
  });
});

describe('subtract', () => {
  test('subtracts 3 - 2 to equal 1', () => {
    expect(subtract(3, 2)).toBe(1);
  });

  test('subtracts 1 - 3 to equal -2', () => {
    expect(subtract(1, 3)).toBe(-2);
  });


  test('subtracts 100 - 50 to equal 50', () => {
    expect(subtract(100, 50)).toBe(50);
  });
});
