import { Sum } from './MyMath.js'
import { AddList } from './MyMath.js'
import { DivideBy } from './MyMath.js'
import { ReSortedNumbers } from './MyMath.js'

describe("Sum", () => {

  test('Whether undefined is retruned on invalid type', () => {
    expect(Sum(1, "Test")).toBeUndefined()
  })

  test('adds 1 + 2 to equal 3', () => {
    expect(Sum(1, 2)).toBe(3)
  })
  
  it('produces the sum of 10 + 20, which should be 30', () => {
    expect(Sum(10, 20)).toBe(30)
  })

})

// ICE 

describe("AddList", () => {

  test('Adds a list of numbers together', () => {
    input = [1,3,4,5];
    result = 13;
    expect(AddList(input)).toBe(result);
    input = [15,5,8,-10];
    result = 18;
    expect(AddList(input)).toBe(result);
  })
  test('Tests if empty array returns undefinied', () => {
    let input = []
    expect(AddList(input)).toBeUndefined();
  })
  test('Tests if undefined element returns undefined', () => {
    let input = [undefined,0,2,3]
    expect(AddList(input)).toBeUndefined();
  })
  test('Tests if non-array returns undefined', () => {
    let input = 100;
    expect(AddList(input)).toBeUndefined();
  })
})

describe("DivideBy", () => {

  test('Whether undefined is retruned on invalid type', () => {
    expect(DivideBy(1, "Test")).toBeUndefined()
  })

  test('divided 2 / 1 to equal 2', () => {
    expect(DivideBy(2, 1)).toBe(2)
  })
  
  it('produces the quotient of 30 / 10, which should be 3', () => {
    expect(DivideBy(30, 10)).toBe(3)
  })

})

describe("ReSortedNumbers", () => {

  test('Tests if empty array returns null', () => {
    let input = []
    expect(ReSortedNumbers(input)).toBeNull();
  })
  test('Tests if undefined element returns null', () => {
    let input = ['cat',0,2,3]
    expect(ReSortedNumbers(input)).toBeNull();
  })
  test('Tests if non-array returns null', () => {
    let input = 100;
    expect(ReSortedNumbers(input)).toBeNull();
  })
})

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
