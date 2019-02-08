import sort from "./exercise1";

describe("exersize 1", () => {
  it("result is array", () => {
    expect(Array.isArray(sort([1, 2]))).toBe(true);
  });

  it("odd numbers has lesser indexes", () => {
    const input = [1, 3, 54, 5, 345, 2, 21, 3];
    const output = [1, 3, 3, 5, 21, 345, 2, 54];
    expect(sort(input)).toEqual(output);
  });
});
