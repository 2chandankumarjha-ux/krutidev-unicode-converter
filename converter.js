// Core Converter Logic

const krutiToUnicodeMaps = {
    array_one: [
        "ñ", "Q+Z", "sas", "aa", ")Z", "ZZ", "‘", "’", "“", "”",
        "å", "ƒ", "„", "…", "†", "‡", "ˆ", "‰", "Š", "‹",
        "¶+", "d+", "[+k", "[+", "x+", "T+", "t+", "M+", "<+", "Q+", ";+", "j+", "u+",
        "Ùk", "Ù", "ä", "–", "—", "é", "™", "=kk", "f=k",
        "à", "á", "â", "ã", "ºz", "º", "í", "{k", "{", "=", "«",
        "Nî", "Vî", "Bî", "Mî", "<î", "|", "K", "}",
        "J", "Vª", "Mª", "<ªª", "Nª", "Ø", "Ý", "nzZ", "æ", "ç", "Á", "xz", "#", ":",
        "v‚", "vks", "vkS", "vk", "v", "b±", "Ã", "bZ", "b", "m", "Å", ",s", ",", "_",
        "ô", "d", "Dk", "D", "[k", "[", "x", "Xk", "X", "Ä", "?k", "?", "³",
        "pkS", "p", "Pk", "P", "N", "t", "Tk", "T", ">", "÷", "¥",
        "ê", "ë", "V", "B", "ì", "ï", "M+", "<+", "M", "<", ".k", ".",
        "r", "Rk", "R", "Fk", "F", ")", "n", "/k", "èk", "/", "Ë", "è", "u", "Uk", "U",
        "i", "Ik", "I", "Q", "¶", "c", "Ck", "C", "Hk", "H", "e", "Ek", "E",
        ";", "¸", "j", "y", "Yk", "Y", "G", "o", "Ok", "O",
        "'k", "'", "\"k", "\"", "l", "Lk", "L", "g",
        "È", "z",
        "Ì", "Í", "Î", "Ï", "Ñ", "Ò", "Ó", "Ô", "Ö", "Ø", "Ù", "Ük", "Ü",
        "‚", "ks", "kS", "k", "h", "q", "w", "`", "s", "S",
        "a", "¡", "%", "W", "•", "·", "∙", "·", "~j", "~", "\\", "+", " ः",
        "^", "*", "Þ", "ß", "(", "¼", "½", "¿", "À", "¾", "A", "-", "&", "&", "Œ", "]", "~ ", "@"
    ],
    array_two: [
        "॰", "QZ+", "sa", "a", "र्द्ध", "Z", "\"", "\"", "'", "'",
        "०", "१", "२", "३", "४", "५", "६", "७", "८", "९",
        "फ़्", "क़", "ख़", "ख़्", "ग़", "ज़्", "ज़", "ड़", "ढ़", "फ़", "य़", "ऱ", "ऩ",
        "त्त", "त्त्", "क्त", "दृ", "कृ", "न्न", "न्न्", "=k", "f=",
        "ह्न", "ह्य", "हृ", "ह्म", "ह्र", "ह्", "द्द", "क्ष", "क्ष्", "त्र", "त्र्",
        "छ्य", "ट्य", "ठ्य", "ड्य", "ढ्य", "द्य", "ज्ञ", "द्व",
        "श्र", "ट्र", "ड्र", "ढ्र", "छ्र", "क्र", "फ्र", "र्द्र", "द्र", "प्र", "प्र", "ग्र", "रु", "रू",
        "ऑ", "ओ", "औ", "आ", "अ", "ईं", "ई", "ई", "इ", "उ", "ऊ", "ऐ", "ए", "ऋ",
        "क्क", "क", "क", "क्", "ख", "ख्", "ग", "ग", "ग्", "घ", "घ", "घ्", "ङ",
        "चै", "च", "च", "च्", "छ", "ज", "ज", "ज्", "झ", "झ्", "ञ",
        "ट्ट", "ट्ठ", "ट", "ठ", "ड्ड", "ड्ढ", "ड़", "ढ़", "ड", "ढ", "ण", "ण्",
        "त", "त", "त्", "थ", "थ्", "द्ध", "द", "ध", "ध", "ध्", "ध्", "ध्", "न", "न", "न्",
        "प", "प", "प्", "फ", "फ्", "ब", "ब", "ब्", "भ", "भ्", "म", "म", "म्",
        "य", "य्", "र", "ल", "ल", "ल्", "ळ", "व", "व", "व्",
        "श", "श्", "ष", "ष्", "स", "स", "स्", "ह",
        "ीं", "्र",
        "द्द", "ट्ट", "ट्ठ", "ड्ड", "कृ", "भ", "्य", "ड्ढ", "झ्", "क्र", "त्त्", "श", "श्",
        "ॉ", "ो", "ौ", "ा", "ी", "ु", "ू", "ृ", "े", "ै",
        "ं", "ँ", "ः", "ॅ", "ऽ", "ऽ", "ऽ", "ऽ", "्र", "्", "?", "़", ":",
        "‘", "’", "“", "”", ";", "(", ")", "{", "}", "=", "।", ".", "-", "µ", "॰", ",", "् ", "/"
    ]
};

const unicodeToKrutiMaps = {
    array_one: [
        "‘", "’", "“", "”", "(", ")", "{", "}", "=", "।", "?", "-", "µ", "॰", ",", ".", "् ",
        "०", "१", "२", "३", "४", "५", "६", "७", "८", "९", "x",
        "फ़्", "क़", "ख़", "ग़", "ज़्", "ज़", "ड़", "ढ़", "फ़", "य़", "ऱ", "ऩ",
        "त्त्", "त्त", "क्त", "दृ", "कृ",
        "ह्न", "ह्य", "हृ", "ह्म", "ह्र", "ह्", "द्द", "क्ष्", "क्ष", "त्र्", "त्र", "ज्ञ",
        "छ्य", "ट्य", "ठ्य", "ड्य", "ढ्य", "द्य", "द्व",
        "श्र", "ट्र", "ड्र", "ढ्र", "छ्र", "क्र", "फ्र", "द्र", "प्र", "ग्र", "रु", "रू",
        "्र",
        "ओ", "औ", "आ", "अ", "ई", "इ", "उ", "ऊ", "ऐ", "ए", "ऋ",
        "क्", "क", "क्क", "ख्", "ख", "ग्", "ग", "घ्", "घ", "ङ",
        "चै", "च्", "च", "छ", "ज्", "ज", "झ्", "झ", "ञ",
        "ट्ट", "ट्ठ", "ट", "ठ", "ड्ड", "ड्ढ", "ड", "ढ", "ण्", "ण",
        "त्", "त", "थ्", "थ", "द्ध", "द", "ध्", "ध", "न्", "न",
        "प्", "प", "फ्", "फ", "ब्", "ब", "भ्", "भ", "म्", "म",
        "य्", "य", "र", "ल्", "ल", "ळ", "व्", "व",
        "श्", "श", "ष्", "ष", "स्", "स", "ह",
        "ऑ", "ॉ", "ो", "ौ", "ा", "ी", "ु", "ू", "ृ", "े", "ै",
        "ं", "ँ", "ः", "ॅ", "ऽ", "् ", "्"
    ],
    array_two: [
        "^", "*", "Þ", "ß", "¼", "½", "¿", "À", "¾", "A", "\\", "&", "&", "Œ", "]", "-", "~ ",
        "å", "ƒ", "„", "…", "†", "‡", "ˆ", "‰", "Š", "‹", "Û",
        "¶", "d", "[k", "x", "T", "t", "M+", "<+", "Q", ";", "j", "u",
        "Ù", "Ùk", "ä", "–", "—",
        "à", "á", "â", "ã", "ºz", "º", "í", "{", "{k", "«", "=", "K",
        "Nî", "Vî", "Bî", "Mî", "<î", "|", "}",
        "J", "Vª", "Mª", "<ªª", "Nª", "Ø", "Ý", "æ", "ç", "xz", "#", ":",
        "z",
        "vks", "vkS", "vk", "v", "bZ", "b", "m", "Å", ",s", ",", "_",
        "D", "d", "ô", "[", "[k", "X", "x", "?", "?k", "³",
        "pkS", "P", "p", "N", "T", "t", "÷", ">", "¥",
        "ê", "ë", "V", "B", "ì", "ï", "M", "<", ".", ".k",
        "R", "r", "F", "Fk", ")", "n", "/", "/k", "U", "u",
        "I", "i", "¶", "Q", "C", "c", "H", "Hk", "E", "e",
        "¸", ";", "j", "Y", "y", "G", "O", "o",
        "'", "'k", "\"", "\"k", "L", "l", "g",
        "v‚", "‚", "ks", "kS", "k", "h", "q", "w", "`", "s", "S",
        "a", "¡", "%", "W", "·", "~ ", "~"
    ]
};

/**
 * Core replace logic for Kruti Dev -> Unicode
 */
function krutiToUnicode(text) {
    let modified_substring = text;
    const { array_one, array_two } = krutiToUnicodeMaps;

    // Substitute mapping
    for (let i = 0; i < array_one.length; i++) {
        while (modified_substring.includes(array_one[i])) {
            modified_substring = modified_substring.replace(array_one[i], array_two[i]);
        }
    }

    // Special Glyphs
    modified_substring = modified_substring.replace(/±/g, "Zं");
    modified_substring = modified_substring.replace(/Æ/g, "र्f");

    let pos = modified_substring.indexOf("f");
    while (pos !== -1) {
        let charNext = modified_substring.charAt(pos + 1);
        let toReplace = "f" + charNext;
        modified_substring = modified_substring.replace(toReplace, charNext + "ि");
        pos = modified_substring.search(/f/, pos + 1);
    }

    modified_substring = modified_substring.replace(/Ç/g, "fa");
    modified_substring = modified_substring.replace(/É/g, "र्fa");
    
    pos = modified_substring.indexOf("fa");
    while (pos !== -1) {
        let charNext = modified_substring.charAt(pos + 2);
        let toReplace = "fa" + charNext;
        modified_substring = modified_substring.replace(toReplace, charNext + "िं");
        pos = modified_substring.search(/fa/, pos + 2);
    }

    modified_substring = modified_substring.replace(/Ê/g, "ीZ");

    // Half 'i' fix
    pos = modified_substring.indexOf("ि्");
    while (pos !== -1) {
        let charNext = modified_substring.charAt(pos + 2);
        let toReplace = "ि्" + charNext;
        modified_substring = modified_substring.replace(toReplace, "्" + charNext + "ि");
        pos = modified_substring.search(/ि्/, pos + 2);
    }

    // Reph 'Z' fix
    const matras = "अ आ इ ई उ ऊ ए ऐ ओ औ ा ि ी ु ू ृ े ै ो ौ ं : ँ ॅ";
    let posR = modified_substring.indexOf("Z");
    
    while (posR > 0) {
        let probableHalfR = posR - 1;
        let charAtProbable = modified_substring.charAt(probableHalfR);

        while (matras.includes(charAtProbable)) {
            probableHalfR--;
            charAtProbable = modified_substring.charAt(probableHalfR);
        }

        let toReplace = modified_substring.substr(probableHalfR, posR - probableHalfR);
        let replacement = "र्" + toReplace;
        toReplace += "Z";
        modified_substring = modified_substring.replace(toReplace, replacement);
        posR = modified_substring.indexOf("Z");
    }

    return modified_substring;
}

/**
 * Core replace logic for Unicode -> Kruti Dev
 */
function unicodeToKruti(text) {
    let modified_substring = text;
    const { array_one, array_two } = unicodeToKrutiMaps;

    // Nukta varNas
    const nuktas = { "क़": "क़", "ख़‌": "ख़", "ग़": "ग़", "ज़": "ज़", "ड़": "ड़", "ढ़": "ढ़", "ऩ": "ऩ", "फ़": "फ़", "य़": "य़", "ऱ": "ऱ" };
    for (const [key, val] of Object.entries(nuktas)) {
        modified_substring = modified_substring.replace(new RegExp(key, 'g'), val);
    }

    // 'i' matra fix
    let posF = modified_substring.indexOf("ि");
    while (posF !== -1) {
        let charLeft = modified_substring.charAt(posF - 1);
        modified_substring = modified_substring.replace(charLeft + "ि", "f" + charLeft);
        posF = posF - 1;
        while ((modified_substring.charAt(posF - 1) === "्") && (posF !== 0)) {
            let toReplace = modified_substring.charAt(posF - 2) + "्";
            modified_substring = modified_substring.replace(toReplace + "f", "f" + toReplace);
            posF = posF - 2;
        }
        posF = modified_substring.search(/ि/, posF + 1);
    }

    // Reph fix
    const matras = "ािीुूृेैोौं:ँॅ";
    modified_substring += '  '; // temp buffer
    
    let posHalfR = modified_substring.indexOf("र्");
    while (posHalfR > 0) {
        let probableZ = posHalfR + 2;
        let charRight = modified_substring.charAt(probableZ + 1);

        while (matras.includes(charRight)) {
            probableZ++;
            charRight = modified_substring.charAt(probableZ + 1);
        }

        let toReplace = modified_substring.substr(posHalfR + 2, probableZ - posHalfR - 1);
        modified_substring = modified_substring.replace("र्" + toReplace, toReplace + "Z");
        posHalfR = modified_substring.indexOf("र्");
    }

    modified_substring = modified_substring.substr(0, modified_substring.length - 2); // remove temp buffer

    // Substitute mapping
    for (let i = 0; i < array_one.length; i++) {
        while (modified_substring.includes(array_one[i])) {
            modified_substring = modified_substring.replace(array_one[i], array_two[i]);
        }
    }

    return modified_substring;
}

// -------------------------------------------------------------------------
// THE MAGIC LINE: This makes it work in BOTH Node.js (CLI) and Browsers!
// -------------------------------------------------------------------------
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { krutiToUnicode, unicodeToKruti };
}
if (typeof module !== 'undefined' && module.exports) { module.exports = { krutiToUnicode, unicodeToKruti }; }
