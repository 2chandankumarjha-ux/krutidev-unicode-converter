#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { krutiToUnicode, unicodeToKruti } = require('./lib/converter');

// Parse CLI arguments
const args = process.argv.slice(2);
const getArg = (flag) => {
    const index = args.indexOf(flag);
    return index !== -1 ? args[index + 1] : null;
};

const inputFile = getArg('-f') || getArg('--file');
const direction = getArg('-d') || getArg('--direction') || 'kruti-to-uni';
const outputFile = getArg('-o') || getArg('--output') || 'output.txt';

if (!inputFile) {
    console.log(`
❌ Error: No input file specified.

Usage:
  node index.js -f <input.txt> -d <kruti-to-uni | uni-to-kruti> [-o <output.txt>]

Example:
  node index.js -f input.txt -d kruti-to-uni
    `);
    process.exit(1);
}

try {
    const fullPath = path.resolve(inputFile);
    if (!fs.existsSync(fullPath)) {
        console.error(`❌ Error: File not found: ${fullPath}`);
        process.exit(1);
    }

    const rawText = fs.readFileSync(fullPath, 'utf8');
    let convertedText = '';

    if (direction === 'kruti-to-uni') {
        convertedText = krutiToUnicode(rawText);
    } else if (direction === 'uni-to-kruti') {
        convertedText = unicodeToKruti(rawText);
    } else {
        console.error(`❌ Error: Invalid direction. Use 'kruti-to-uni' or 'uni-to-kruti'.`);
        process.exit(1);
    }

    fs.writeFileSync(outputFile, convertedText, 'utf8');
    console.log(`✅ Success! Converted text saved to: ${outputFile}`);

} catch (error) {
    console.error(`❌ An error occurred: ${error.message}`);
}