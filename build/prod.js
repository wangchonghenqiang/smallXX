const path = require('path');
const fs = require('fs');
const originPath = path.resolve(__dirname, '../src');
const distPath = path.resolve(__dirname, '../lib');
console.log(originPath, 'originPath')
const dirs = fs.readdir(originPath, 'utf8', (err, file) => {
    if(file.isDirectory) {

    } else {

    }
});