#!/usr/bin/env node
const argv = require("yargs")
  .usage("Usage: resize-js [options]")
  .example("resize-js -f ./img.png -w 25 -g")
  .option("file", {
    alias: "f",
    describe: "file or glob",
    demandOption: true,
    type: "string"
  })
  .option("width", {
    alias: "w",
    describe: "width of the output image in pixels",
    demandOption: false,
    default: 400,
    type: "number"
  })
  .option("grayscale", {
    alias: "g",
    describe: "Convert to grayscale",
    demandOption: false,
    default: false,
    type: "boolean"
  })
  .help("h")
  .alias("h", "help")
  .epilog(`Copyright ${new Date().getFullYear()}`).argv;

const glob = require("glob");

const resizeImages = require("./lib/resize");

const width = +argv.width || 400;

glob(argv.file, (err, files) => {
  if (err) {
    console.error(err);
    return 1;
  } else {
    if (files.length === 0) {
      console.error("No files found");
      return 1;
    }
    return resizeImages.resize(files, width, argv.grayscale);
  }
});
