import { expect, test, beforeAll } from "vitest";
import Calculator from "./Calculator";

let calculator;

beforeAll(()=>{
  calculator = new Calculator()
})

test('calculate two numbers', () => {
  expect(calculator.calculateTwoNumbers('9 + 3')).toBe(12)
  expect(calculator.calculateTwoNumbers('1 - 1')).toBe(0)
  expect(calculator.calculateTwoNumbers('5 - 9')).toBe(-4)
  expect(calculator.calculateTwoNumbers('3 × 5')).toBe(15)
  expect(calculator.calculateTwoNumbers('0 × 7')).toBe(0)
  expect(calculator.calculateTwoNumbers('9 ÷ 3')).toBe(3)
  expect(calculator.calculateTwoNumbers('0 ÷ 7')).toBe(0)
})