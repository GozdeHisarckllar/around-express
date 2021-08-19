const fsPromises = require('fs').promises;

const readDataFile = (filePath) => {
  return fsPromises.readFile(filePath, { encoding: 'utf8' })
    .then((data) => JSON.parse(data))
    .catch((err) => console.log(err));
};

module.exports = readDataFile;
