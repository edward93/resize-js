import resize from "../lib/resize.js";
jest.mock("sharp");

console.error = jest.fn();

beforeEach(() => {
  jest.resetAllMocks();
});

describe("Resize", () => {
  it("Throws an error if files is undefined", () => {
    const result = resize();
    expect(result).toBe(false);
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it("Throws an error if 'files' is empty", () => {
    const result = resize([]);
    expect(result).toBe(false);
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it("Throws an error if 'width' is not a number", () => {
    const result = resize(["file"], "invalidWidth");
    expect(result).toBe(false);
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it("Throws an error if 'width' is less than or equal 0", () => {
    const result = resize(["file"], 0);
    expect(result).toBe(false);
    expect(console.error).toHaveBeenCalledTimes(1);
  })
});
