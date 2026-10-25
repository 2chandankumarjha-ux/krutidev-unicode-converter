/**
 * Example usage of the kruti-unicode-converter library.
 * Run this file to see the conversion in action!
 * 
 * Command: node example.js
 */

const { krutiToUnicode, unicodeToKruti } = require('./lib/converter');

console.log("=========================================");
console.log("🔄 Kruti Dev ↔ Unicode Converter Example");
console.log("=========================================\n");

// --- TEST 1: Kruti Dev to Unicode ---
const sampleKruti = "osYl QkWj bafM;k & ftls vkt ge ^okVj gkosZLV* ds uke ls tkurs gS";
console.log("👉 Original (Kruti Dev):");
console.log(sampleKruti);

const convertedUnicode = krutiToUnicode(sampleKruti);
console.log("\n✅ Converted (Unicode):");
console.log(convertedUnicode);
console.log("\n-----------------------------------------\n");

// --- TEST 2: Unicode to Kruti Dev ---
const sampleUnicode = "वेल्स फॉर इंडिया - जिसे आज हम 'वाटर हार्वेस्ट' के नाम से जानते है";
console.log("👉 Original (Unicode):");
console.log(sampleUnicode);

const convertedKruti = unicodeToKruti(sampleUnicode);
console.log("\n✅ Converted (Kruti Dev):");
console.log(convertedKruti);
console.log("\n=========================================");