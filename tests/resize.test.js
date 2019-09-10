import { resize } from "../lib/resize.js";

const mockToFileCallback = jest.fn();
const mockToFile = jest.fn();

jest.mock("sharp", () => () => ({
  resize: jest.fn().mockImplementation(() => ({
    // toFile: jest.fn().mockImplementation((outDir, mockToFileCallback) => {
    //   mockToFileCallback(false, {});
    // })
    toFile: mockToFile
  }))
}));

jest.mock("path");

console.error = jest.fn();
console.info = jest.fn();

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
  });

  it("Doesn't throw any error if 'files' and 'width' are valid", () => {
    mockToFile.mockImplementation((outDir, mockToFileCallback) => {
      mockToFileCallback(false, {});
    });

    const result = resize(["file"], 100);
    expect(console.error).toHaveBeenCalledTimes(0);
    expect(console.info).toHaveBeenCalledTimes(1);
  });

  it("Displays error if output file creation failed", () => {
    mockToFile.mockImplementation((outDir, mockToFileCallback) => {
      mockToFileCallback("error while saving the file", false);
    });

    const result = resize(["file"], 100);

    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.info).toHaveBeenCalledTimes(0);
  });
});
