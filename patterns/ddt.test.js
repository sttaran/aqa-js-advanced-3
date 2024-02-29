import test from 'node:test';
import assert from 'node:assert';
// Data Driven Testing

import {add} from './tdd.js';
import {fixtures} from './fixtures/add.fixtures.js';

fixtures.forEach(({title, input, expected}) => {
  test(title, () => {
    const res = add(...input);
    assert.equal(res, expected);
  });
});
