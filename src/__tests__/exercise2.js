import func from "../src/exercise2";

const makeDelay = (ms, result) => () =>
  new Promise(resolve => setTimeout(resolve, ms, result));

describe("exercise 2", () => {
  it("result is a Promise", () => {
    expect(func(200, makeDelay(0), makeDelay(0))).toBeInstanceOf(Promise);
  });
  it("accepts sync functions. resolves with an array of results", async () => {
    expect(func(100, () => "one", () => "two")).resolves.toEqual([
      "one",
      "two"
    ]);
  });
  it("accepts async functions. resolves with an array of results", async () => {
    expect(
      func(
        100,
        makeDelay(66, "one"),
        makeDelay(25, "two"),
        makeDelay(45, "three")
      )
    ).resolves.toEqual(["one", "two", "three"]);
  });
  it("rejects by timeout", async () => {
    expect(
      func(65, () => "one", makeDelay(25, "two"), makeDelay(45, "three"))
    ).rejects.toThrow();
  });
});
