const sharp = require("sharp");

const resize = (files, width = 400) => {
  if (!files) {
    console.error("No files found");
    return false;
  }

  if (files && files.length === 0) {
    console.error("No files found");
    return false;
  }

  if (!(+width instanceof Number)) {
    console.error("Width must be a valid integer");
    return false;
  }

  if (width <= 0) {
    console.error("Width must be a valid integer (gt 0)");
    return false;
  }

  files.map(file => {
    sharp(file)
      .resize({ width })
      .toFile(
        `${path.dirname(file)}/resized-${path.basename(file)}`,
        (err, info) => {
          if (err) {
            console.error(err);
            return false;
          }
          if (info) {
            console.info(info);
            return true;
          }
        }
      );
  });
};

export default resize;
