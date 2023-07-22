const add = require('../utils/calculator')

describe('Calculator', () => {
  const data = [
    [-1, 2, 1],
    [0, 2, 2],
    [3, 2, 5],
    [4, 2, 6],
    [5, 2, 7],
    [6, 2, 8],
    [7, 2, 9]
  ]

  test.each(data)('add(%i, %i)', (a, b, expected) => {
    expect(add(a, b)).toBe(expected)
  })
})
