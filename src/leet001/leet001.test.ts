//import assert from "node:assert/strict";
//import forEach from 'mocha-each';

//import { leet001 } from "./index";

//describe("ensure leet001 works as expected", () => {
//  forEach([
//    [[2,7,11,15], 9, [0, 1]],
//    [[3,2,4], 6, [1,2]],
//    [[3,3], 6, [0,1]]
//  ])
//  .it('Looks in %j for numbers that sum to %d then returns their indexes %j', (left, right, expected) => {
//    const result = leet001(left, right)
//    assert(result.length === 2)
//    assert(result.includes(expected[0]))
//    assert(result.includes(expected[1]))
//  });
//});

import assert from "node:assert/strict";
import test from 'node:test';
import { leet001 } from "./index";

const cases: Array<[number[], number, number[]]> = [
  [[2,7,11,15], 9, [0, 1]],
  [[3,2,4], 6, [1,2]],
  [[3,3], 6, [0,1]]
]

for (const [left, right, expected] of cases) {
  test(`Looks in ${left} for numbers that sum to ${right} then returns their indexes ${expected}`, async (t) => {
      const result = leet001(left, right)
      assert(result.length === 2);
      assert(result[0] !== result[1]);
      assert(result.includes(expected[0]))
      assert(result.includes(expected[1]))
  });
}