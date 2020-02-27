import { resize } from "../lib/resize.js";

const mockToFileCallback = jest.fn();
const mockToFile = jest.fn();
const mockGrayscale = jest.fn();

jest.mock("sharp", () => () => ({
  resize: jest.fn().mockImplementation(() => ({
    // toFile: jest.fn().mockImplementation((outDir, mockToFileCallback) => {
    //   mockToFileCallback(false, {});
    // })
    toFile: mockToFile,
    grayscale: mockGrayscale
  })),
  toFile: mockToFile,
  grayscale: mockGrayscale
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

  it("Throws an error if 'width' is undefined and 'grayscale' is false", () => {
    const result = resize(["file"], undefined, false);
    expect(result).toBe(false);
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it("Doesn't throw an error if 'width' is undefined but 'grayscale' is true", () => {
    mockGrayscale.mockImplementation(() => ({ toFile: mockToFile }));

    mockToFile.mockImplementation((outDir, mockToFileCallback) => {
      mockToFileCallback(false, {});
    });

    const result = resize(["file"], undefined, true);

    expect(console.error).toHaveBeenCalledTimes(0);
    expect(console.info).toHaveBeenCalledTimes(1);
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

  it("Grayscale is called when 3rd argument is true", () => {
    mockGrayscale.mockImplementation(() => ({ toFile: mockToFile }));

    mockToFile.mockImplementation((outDir, mockToFileCallback) => {
      mockToFileCallback(false, {});
    });

    const result = resize(["file"], 100, true);
    expect(console.error).toHaveBeenCalledTimes(0);
    expect(console.info).toHaveBeenCalledTimes(1);
    expect(mockToFile).toHaveBeenCalledTimes(1);
    expect(mockGrayscale).toHaveBeenCalledTimes(1);
  });
});
