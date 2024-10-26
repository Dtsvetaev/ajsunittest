
import { add, subtract } from './functions';

describe('Math functions', () => {
  
  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5); // проверяет, что add(2, 3) возвращает 5
  });

  test('adds positive and negative numbers', () => {
    expect(add(-2, 3)).toBe(1); // проверяет, что add(-2, 3) возвращает 1
  });

  test('adds two negative numbers', () => {
    expect(add(-2, -3)).toBe(-5); // проверяет, что add(-2, -3) возвращает -5
  });

  test('subtracts two positive numbers', () => {
    expect(subtract(5, 3)).toBe(2); // проверяет, что subtract(5, 3) возвращает 2
  });

  test('subtracts positive and negative numbers', () => {
    expect(subtract(5, -3)).toBe(8); // проверяет, что subtract(5, -3) возвращает 8
  });

  test('subtracts two negative numbers', () => {
    expect(subtract(-5, -3)).toBe(-2); // проверяет, что subtract(-5, -3) возвращает -2
  });

});
