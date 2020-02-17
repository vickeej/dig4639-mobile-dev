import { Sum } from './MyMath.js'

test('adds 1 + 2 to equal 3', () => {
  expect(Sum(1, 2)).toBe(3)
})

it('produces the sum of 10 + 20, which should be 30', () => {
  expect(Sum(10, 20)).toBe(30)
})

// ICE 

// Examples for Null
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

// Examples for zero
test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})
