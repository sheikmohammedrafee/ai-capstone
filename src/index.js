const { operations } = require('./calculator');

function printUsage() {
  console.log('Usage: npm start -- <operation> <number-a> <number-b>');
  console.log('Operations: add, subtract, multiply, divide');
  console.log('Example: npm start -- add 10 5');
}

function main() {
  const [operation, aRaw, bRaw] = process.argv.slice(2);

  if (!operation || !aRaw || !bRaw) {
    printUsage();
    process.exit(1);
  }

  const calculate = operations[operation];

  if (!calculate) {
    console.error(`Unknown operation: ${operation}`);
    printUsage();
    process.exit(1);
  }

  const a = Number(aRaw);
  const b = Number(bRaw);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Both numbers must be valid numeric values.');
    process.exit(1);
  }

  try {
    const result = calculate(a, b);
    console.log(result);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

main();
