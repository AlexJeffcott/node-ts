import test from "node:test";
import assert from "node:assert/strict";
import { greeting } from "./index";

test("ensure leet001 works as expected", (t) => {
  assert(greeting === "hello world");
});
