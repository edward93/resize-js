#!/usr/bin/env node

const glob = require("glob");

const resizeImgs = require("./lib/resize");

const width = +process.argv[3] || 400;

if (process.argv[2]) {
  glob(process.argv[2], (err, files) => {
    if (err) {
      console.error(err);
      return;
    } else {
      if (files.length === 0) {
        console.error("No files found");
        return 1;
      }
      resizeImgs(files, width);
    }
  });
} else {
  console.error("Please specify a filename/glob");
}
