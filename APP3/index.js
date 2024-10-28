// const os = require('os');

// console.log('Operating System:', os.platform());
// console.log('Hostname:', os.hostname());
// console.log('Number of CPUs:', os.cpus().length);
// console.log('Free Memory:', os.freemem() / (1024 * 1024) + ' MB');

// const path = require('path');

// const filePath = '/path/to/file.txt';

// console.log('Joined Path:', path.join('directory', 'file.txt'));
// console.log('Directory Name:', path.dirname(filePath));
// console.log('Base Name:', path.basename(filePath));
// console.log('Extension:', path.extname(filePath));

const fs = require('fs');

// fs.readFile('new_file.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// fs.writeFile('file.txt', 'Hello, World!', (err) => {
//     if (err) throw err;
//     console.log('File written successfully');
// });

// fs.mkdir('new_directory', (err) => {
//     if (err) throw err;
//     console.log('Directory created');
// });

fs.readdir('new_directory', (err, files) => {
    if (err) throw err;
    console.log(files);
});