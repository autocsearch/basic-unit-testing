export function sumAndPlusTen(a, b) {
  return a + b + 10;
}

// import { expect, test } from "vitest";

// let i = 0;

// function getApplesCount() {
//   i++;
//   return i > 1 ? Number.NaN : i;
// }

// test("getApplesCount has some unusual side effects...", () => {
//   expect(getApplesCount()).not.toBeNaN();
//   expect(getApplesCount()).toBeNaN();
// });

export function maxNum(a, b) {
  if ((typeof a !== "number") | (typeof b !== "number")) throw new Error("only numbers");

  if (b > a) {
    return b;
  } else if (a > b) {
    return a;
  } else {
    return a;
  }
}

export function factorial(n) {
  if (typeof n !== "number") throw new Error("only Number");
  if (n < 0) throw new Error("number must be a positive integer");
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
