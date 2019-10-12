const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let codeWords = expr.split('**********');
    let decodeWords = [];

    for (let codeWord of codeWords) {
        let decodeWord = "";

        for (let i = 0; i < codeWord.length; i += 10) {  
            let digitCodeLetter = codeWord.substr(i, 10);
            let codeLetter = "";

            for (let j = 0; j < digitCodeLetter.length; j += 2) {
                switch (digitCodeLetter.substr(j, 2)) {
                    case "00":
                        break;
                    case "10":
                        codeLetter += ".";
                        break;
                    case "11":
                        codeLetter += "-";
                        break;
                }
            }
            for (let code in MORSE_TABLE) {
                if (code == codeLetter) {
                    decodeWord += MORSE_TABLE[code];
                    break;
                }
            }
        }
        decodeWords.push(decodeWord);
    }
    return decodeWords.join(" ");
}
module.exports = {
    decode
}