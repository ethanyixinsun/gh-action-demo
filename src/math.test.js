import { describe, it, expect } from 'vitest';
import { add, multiply } from './math.js';

describe('add', () => {
  it('returns the sum of two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
  it('returns the sum of two numbers - case 2', () => {
    expect(add(-1, -2)).toBe(-3);
  });
  it('returns the sum of two numbers - case 2', () => {
    expect(add(3, 5)).toBe(9);
  });
});

describe('multiply', () => {
  it('returns the product of two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });
});
