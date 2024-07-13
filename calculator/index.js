const crypto = require('crypto');

const args = process.argv.slice(2);
const command = args[0];

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return 'Cannot divide by zero';
  }
  return a / b;
}

function sin(a) {
  return Math.sin(a);
}

function cos(a) {
  return Math.cos(a);
}

function tan(a) {
  return Math.tan(a);
}

function random(length = 8) {
  return crypto.randomBytes(length).toString('hex');
}

switch (command) {
  case 'add':
    if (args.length < 3) {
      console.error('enter the 2 number to add');
    } else {
      const result = add(Number(args[1]), Number(args[2]));
      console.log(result);
    }
    break;

  case 'sub':
    if (args.length < 3) {
      console.error('enter the 2 number to sub');
    } else {
      const result = sub(Number(args[1]), Number(args[2]));
      console.log(result);
    }
    break;

  case 'mult':
    if (args.length < 3) {
      console.error('enter the 2 number to multiple');
    } else {
      const result = mult(Number(args[1]), Number(args[2]));
      console.log(result);
    }
    break;

  case 'divide':
    if (args.length < 3) {
      console.error('enter the 2 number to divide.');
    } else {
      const result = divide(Number(args[1]), Number(args[2]));
      console.log(result);
    }
    break;

  case 'sin':
    if (args.length < 2) {
      console.error('enter the a number to calculate sine.');
    } else {
      const result = sin(Number(args[1]));
      console.log(result);
    }
    break;

  case 'cos':
    if (args.length < 2) {
      console.error('enter the a number to calculate cos.');
    } else {
      const result = cos(Number(args[1]));
      console.log(result);
    }
    break;

  case 'tan':
    if (args.length < 2) {
      console.error('enter the a number to calculate tan.');
    } else {
      const result = tan(Number(args[1]));
      console.log(result);
    }
    break;

  case 'random':
    const length = args.length > 1 ? Number(args[1]) : 8;
    const result = random(length);
    console.log(result);
    break;

  default:
    console.error('operation not available');
}