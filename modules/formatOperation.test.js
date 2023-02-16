import { expect, test } from "vitest";
import formatOperation from "./formatOperations";

test('format operation with two operators', ()=>{
  expect(formatOperation('1+1')).toBe('1+1')
  expect(formatOperation('3-4')).toBe('3-4')
  expect(formatOperation('52×12')).toBe('52*12')
  expect(formatOperation('9÷3')).toBe('9/3')
})

test('format operation with many operators', ()=>{
  expect(formatOperation('1+1+1')).toBe('1+1+1')
  expect(formatOperation('3-4+5-7')).toBe('3-4+5-7')
  expect(formatOperation('52×12÷6')).toBe('52*12/6')
  expect(formatOperation('6×6×6×6')).toBe('6*6*6*6')
  expect(formatOperation('6÷6÷6÷6')).toBe('6/6/6/6')
})