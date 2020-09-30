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
    let arr = [];
    let answer = '';
    let k = 0;
    while (k <= expr.length - 10) {
        arr.push(expr.slice(k, k + 10));
        k += 10;
    }

    for (let element of arr) {
        let ind = element.indexOf('1');
        if (ind < 0) {
            answer += ' ';
        } else {
            let arrDoubleNumbers = [];
            while (ind <= element.length - 2) {
                arrDoubleNumbers.push(element.slice(ind, ind + 2));
                ind += 2;
            }
            let charArr = arrDoubleNumbers.map(x => x = x === '10' ? '.' : '-');

            answer += MORSE_TABLE[charArr.join('')];

        }

    }
    return answer;

}

module.exports = {
    decode
}

