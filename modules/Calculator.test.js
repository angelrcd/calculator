import { expect, test, beforeAll } from "vitest";
import calculate from "./Calculator";

test('calculate two numbers', () => {
  expect(calculate('9+3')).toBe(12)
  expect(calculate('1-1')).toBe(0)
  expect(calculate('5-9')).toBe(-4)
  expect(calculate('3×5')).toBe(15)
  expect(calculate('0×7')).toBe(0)
  expect(calculate('9÷3')).toBe(3)
  expect(calculate('0÷7')).toBe(0)
})

test('calculate many numbers', () => {
  expect(calculate('9+3+1')).toBe(13)
  expect(calculate('100-50')).toBe(50)
  expect(calculate('3×3×3')).toBe(27)
  expect(calculate('3×3÷3')).toBe(3)
  expect(calculate('0×7+9÷3')).toBe(3)
  expect(calculate('40÷2÷2')).toBe(10)
})

test('test wrong syntax', ()=> {
  expect(calculate('9++1')).toBe('Syntax Error')
  expect(calculate('9--1')).toBe('Syntax Error')
  expect(calculate('9××1')).toBe('Syntax Error')
  expect(calculate('9÷÷1')).toBe('Syntax Error')
  expect(calculate('9××××1')).toBe('Syntax Error')
  expect(calculate('9÷÷÷÷÷÷1')).toBe('Syntax Error')
})

test('operations with negative numbers', ()=>{
  expect(calculate('5-9')).toBe(-4)
  expect(calculate('-5-9')).toBe(-14)
  expect(calculate('-5×10')).toBe(-50)
  expect(calculate('-5×-10')).toBe(50)
  expect(calculate('-20÷5')).toBe(-4)
  expect(calculate('20÷-5')).toBe(-4)
  expect(calculate('-20÷-5')).toBe(4)
})

test('calculate using Ans', ()=>{
  expect(calculate('Ans', 0)).toBe(0)
  expect(calculate('Ans', 5)).toBe(5)
  expect(calculate('Ans+10', 5)).toBe(15)
  expect(calculate('10-Ans', 5)).toBe(5)
  expect(calculate('Ans×2', 3)).toBe(6)
  expect(calculate('Ans÷2', 8)).toBe(4)
  
})

test('wrong syntax with ans', ()=>{
  expect(calculate('Ans.+3')).toBe('Syntax Error')
  expect(calculate('.Ans+3')).toBe('Syntax Error')
  expect(calculate('AnsAns+3')).toBe('Syntax Error')
  
})

test('division by zero', ()=>{
  expect(calculate('1÷0')).toBe('Syntax Error')
  expect(calculate('1+4÷0')).toBe('Syntax Error')
  expect(calculate('-5÷0')).toBe('Syntax Error')
  
})

test('operations with decimal numbers', ()=>{
  expect(calculate('0.1+0.2')).toBe(0.3)
  expect(calculate('0.2×6')).toBe(1.2)
  expect(calculate('0.22222×3')).toBe(0.66666)
  expect(calculate('0.3÷2')).toBe(0.15)
})