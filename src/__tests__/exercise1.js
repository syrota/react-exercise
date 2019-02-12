import sort from "../src/exercise1";

describe("exercisse 1", () => {
  it("result is array", () => {
    expect(Array.isArray(sort([1, 2]))).toBe(true);
  });
  it("odd numbers has lesser indexes", () => {
    const input = [1, 3, 54, 5, 345, 2, 21, 3];
    const output = [2, 54, 1, 3, 3, 5, 21, 345];
    expect(sort(input)).toEqual(output);
  });
});
