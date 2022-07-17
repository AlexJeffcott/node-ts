"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

// src/leet001/leet001.test.ts
var import_strict = __toESM(require("node:assert/strict"), 1);
var import_node_test = __toESM(require("node:test"), 1);

// src/leet001/index.ts
function leet001(nums, target) {
  const list = [];
  const halfTarget = target / 2;
  let objectiveNum, result, i;
  i = nums.length;
  for (i; i--; ) {
    list[nums[i]] = i;
  }
  i = nums.length;
  for (i; i--; ) {
    objectiveNum = target - nums[i];
    if (list[objectiveNum] && list[objectiveNum] !== i) {
      result = [list[objectiveNum], i];
      break;
    }
  }
  return result || nums.map((n, i2) => n === halfTarget && i2).filter((n) => n !== false);
}
console.log(leet001([1, 2, 7, 9], 9));

// src/leet001/leet001.test.ts
var cases = [
  [[2, 7, 11, 15], 9, [0, 1]],
  [[3, 2, 4], 6, [1, 2]],
  [[3, 3], 6, [0, 1]]
];
for (const [left, right, expected] of cases) {
  (0, import_node_test.default)(`Looks in ${left} for numbers that sum to ${right} then returns their indexes ${expected}`, async (t) => {
    const result = leet001(left, right);
    (0, import_strict.default)(result.length === 2);
    (0, import_strict.default)(result.includes(expected[0]));
    (0, import_strict.default)(result.includes(expected[1]));
  });
}
