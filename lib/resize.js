const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

function resize(files, width = undefined, grayscale = false, output = ".") {
  if (!files) {
    console.error("No files found");
    return false;
  }

  if (files && files.length === 0) {
    console.error("No files found");
    return false;
  }

  if (width !== undefined && width !== null) {
    if (isNaN(width)) {
      console.error("Width must be a valid integer or (null | undefined)");
      return false;
    }

    if (width <= 0) {
      console.error("Width must be a valid integer (gt 0)");
      return false;
    }
  } else if (grayscale === false) {
    console.error("Either 'width' or 'grayscale' should be defined");
    return false;
  }

  /** Create the folder if it doesn't exist */
  if (!fs.existsSync(output)) {
    fs.mkdirSync(output);
  }

  files.map(file => {
    const defaultFilename = `modified-${path.basename(file)}`;
    const defaultOutputPath = `${path.dirname(file)}/${defaultFilename}`;

    const outPath = output
      ? `${path.dirname(file)}/${output}/${defaultFilename}`
      : defaultOutputPath;

    let command = sharp(file);

    if (width !== undefined && width !== null) {
      command = command.resize({ width });
    }

    if (grayscale) {
      command = command.grayscale();
    }

    command.toFile(outPath, (err, info) => {
      if (err) {
        console.error(err);
        return false;
      }
      if (info) {
        console.info(info);
        return true;
      }
    });
  });
}

exports.resize = resize;
