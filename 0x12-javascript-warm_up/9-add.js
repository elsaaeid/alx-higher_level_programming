#!/usr/bin/node

function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both a and b must be numbers');
  }
  return a + b;
}

if (process.argv.length < 4) {
  console.error('Usage: node add.js <number1> <number2>');
  process.exit(1);
}

const arg1 = Number(process.argv[2]);
const arg2 = Number(process.argv[3]);

if (isNaN(arg1) || isNaN(arg2)) {
  console.error('Both arguments must be valid numbers');
  process.exit(1);
}

console.log(add(arg1, arg2));