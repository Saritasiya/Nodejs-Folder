const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'read':
    if (args.length < 2) {
      console.error('enter a file name to read.');
    } else {
      try {
        const data = fs.readFileSync(args[1], 'utf8');
        console.log(data);

      } catch (err) {
        console.error(`Error reading file: ${err}`);
      }
    }
    break;

  case 'create':
    if (args.length < 2) {
      console.error('enter a file name to create.');
    } else {
      try {
        fs.writeFileSync(args[1], '');
        console.log(`File ${args[1]} created successfully.`);
      } catch (err) {
        console.error(`Error creating file: ${err}`);
      }
    }
    break;

  case 'append':
    if (args.length < 3) {
      console.error('enter content and a file name to append.');
    } else {
      try {
        fs.appendFileSync(args[2], args[1]);
        console.log(`Content appended to file ${args[2]}.`);
      } catch (err) {
        console.error(`Error appending to file: ${err}`);
      }
    }
    break;

  case 'delete':
    if (args.length < 2) {
      console.error('enter a file name to delete.');
    } else {
      try {
        fs.unlinkSync(args[1]);
        console.log(`File ${args[1]} deleted successfully.`);
      } catch (err) {
        console.error(`Error deleting file: ${err}`);
      }
    }
    break;

  case 'rename':
    if (args.length < 3) {
      console.error('enter the current and new file names to rename.');
    } else {
      try {
        fs.renameSync(args[1], args[2]);
        console.log(`File ${args[1]} renamed to ${args[2]}.`);
      } catch (err) {
        console.error(`Error renaming file: ${err}`);
      }
    }
    break;

  case 'list':
    if (args.length < 2) {
      console.error('enter a directory path to list.');
    } else {
      try {
        const files = fs.readdirSync(args[1]);
        files.forEach(file => {
          console.log(file);
        });
      } catch (err) {
        console.error(`Error listing directory: ${err}`);
      }
    }
    break;

  default:
    console.error('Invalid command.');
}
