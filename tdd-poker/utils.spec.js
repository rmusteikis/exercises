const { isSequence, throwError } = require("./utils");

describe("isSequence", () => {
  describe("when is sequence", () => {
    it("should return true", () => {
      expect(isSequence([2, 3, 4, 5, 6])).toBeTruthy();
    });
  });
  describe("when is not sequence", () => {
    it("should return false", () => {
      expect(isSequence([2, 3, 4, 9, 6])).toBeFalsy();
    });
  });
});

describe("throwError", () => {
  it("should throw error", () => {
    expect(throwError).toThrow();
  });
});
