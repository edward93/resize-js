#!/usr/bin/env node

const sharp = require("sharp");
const glob = require("glob");
const path = require("path");

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
      files.map(file => {
        sharp(file)
          .resize({ width })
          .toFile(
            `${path.dirname(file)}/resized-${path.basename(file)}`,
            (err, info) => {
              if (err) console.error(err);
              if (info) console.log(info);
            }
          );
      });
    }
  });
} else {
  console.error("Please specify a filename/glob");
}
