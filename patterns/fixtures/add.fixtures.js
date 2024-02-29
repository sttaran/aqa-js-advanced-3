export const fixtures = [
  {
    title: 'Should add two positive numbers',
    input: [1, 2],
    expected: 3
  },
  {
    title: 'Should add two negative numbers',
    input: [-1, -2],
    expected: -3
  },
  {
    title: 'Should add positive number and 0',
    input: [0, 7],
    expected: 7
  },
  {
    title: 'Should add unlimited quantity of numbers',
    input: [1, 4, 5, 8, 9],
    expected: 27
  },
  {
    title: 'Should add positive number and null',
    input: [1, null],
    expected: 1
  }
];
