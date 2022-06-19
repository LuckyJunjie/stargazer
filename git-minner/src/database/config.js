const path = require('path');
const output = path.join(__dirname, "./models");
const options = { directory: output, caseFile: 'l', caseModel: 'p', caseProp: 'c', lang: 'ts', useDefine: false, singularize: true, spaces: true, indentation: 2 };

// Edit the configuration below for your database dialect

// sqlite
const storage = path.join(__dirname, "./stargazer.sqlite");
const sqlite = {
  dbname: 'stargazer',
  user: '',
  pass: '',
  options: { dialect: 'sqlite', storage: storage },
  autoOptions: { dialect: 'sqlite', storage: storage, ...options }
};


// Change to export appropriate config for your database
module.exports = sqlite;
