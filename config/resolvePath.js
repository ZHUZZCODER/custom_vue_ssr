const path = require("path");
const resolvePath = (filename) => {
  return path.resolve(__dirname, filename);
};

module.exports = resolvePath;
