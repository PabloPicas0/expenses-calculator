import { describe, test, expect } from "vitest";
import { formatCurrency, sum } from "../utils/utils";

describe("utils", () => {
  test("correctly format number to be currency in US", () => {
    expect(formatCurrency(100)).toBe("$100.00");

    expect(formatCurrency(5.78)).toBe("$5.78");
  });

  test("correctly sums all numbers in array of objects", () => {
    expect(
      sum([
        { descritpiton: "", income: 2 },
        { descritpiton: "", income: 2 },
      ])
    ).toBe(4);

    expect(
      sum([
        { descritpiton: "", income: 5 },
        { descritpiton: "", income: 5 },
        { descritpiton: "", income: 4 },
        { descritpiton: "", income: 2 },
      ])
    ).toBe(16);

    expect(
      sum([
        { descritpiton: "", income: 10 },
        { descritpiton: "", income: 10 },
        { descritpiton: "", income: 7 },
        { descritpiton: "", income: 3 },
      ])
    ).toBe(30);
  });
});
