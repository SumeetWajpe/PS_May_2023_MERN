function Add(x, y) {
  return x + y;
}

// A test suite
xdescribe("A suite is just a function", function () {
  let a;

  // A Test case
  it("and so is a spec", function () {
    a = true;

    // matchers
    expect(a).toBe(true);
  });
});

describe("Test suite for add", () => {
  it("adds two numbers", () => {
    expect(Add(20, 30)).toBe(50);
  });
});
