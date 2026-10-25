# 🔄 Kruti Dev ↔ Unicode Converter

A modern, standalone Node.js library and CLI tool to convert **Kruti Dev** font text to **Unicode** (Mangal) and vice versa.

## ✨ Features
- **CLI Tool**: Convert files directly from your terminal.
- **Library Support**: Import it into your own Node.js projects.
- **Accurate Mapping**: Handles complex conjuncts, half-letters, and reph (र्) perfectly.
- **Bidirectional**: Convert both `Kruti Dev → Unicode` and `Unicode → Kruti Dev`.

---

## 🚀 Quick Start (CLI)

You can run this directly without installing anything globally (using `npx`):

```bash
# Convert Kruti Dev to Unicode
npx kruti-unicode-converter -f input.txt -d kruti-to-uni -o output.txt

# Convert Unicode to Kruti Dev
npx kruti-unicode-converter -f input.txt -d uni-to-kruti -o output.txt