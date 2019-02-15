require('dotenv').config();

const multirelease = require("multi-semantic-release");

multirelease([
  `${__dirname}/../packages/project-a/package.json`,
  `${__dirname}/../packages/project-b/package.json`,
]);