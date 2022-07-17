"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/leet001/index.ts
var leet001_exports = {};
__export(leet001_exports, {
  leet001: () => leet001
});
module.exports = __toCommonJS(leet001_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  leet001
});
