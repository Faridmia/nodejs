const fs = require('fs');

// override file
// fs.writeFile('example.txt', 'Hello, World!', (err) => {
//     if (err) {
//         console.error('Error writing to file:', err);
//     } else {
//         console.log('File written successfully!');
//     }
// });

// ager gular sathe append kore file er moddhe data add korte chaile appendFile use korte hobe

// fs.appendFile('example.txt', 'Hello, World!', (err) => {
//     if (err) {
//         console.error('Error writing to file:', err);
//     } else {
//         console.log('File written successfully!');
//     }
// });


// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//     } else {
//         console.log('File content:', data);
//     }
// });

// fs.rename('example.txt', 'new.txt', (err) => {
//   if (err) throw err;
//   console.log('File renamed!');
// });


// fs.unlink('new.txt', (err) => {
//   if (err) throw err;
//   console.log('File deleted!');
// });


if (fs.existsSync('example.txt')) {
  console.log('File exists');
} else {
  console.log('File not found');
}