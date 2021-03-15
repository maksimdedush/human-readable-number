const first = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const second = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const third = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable(number) {
const numArray = number.toString().split('');
const processNumPart = (number, numberWithOffset, numberIndex, numberSize) => {
if (numberWithOffset == null) return first[number] + (numberIndex == 0 && numberSize > 2 ? ' hundred' : '');
switch (numberWithOffset) {
case '0': return (numberIndex == 0 || number > 0) ? first[number] : '';
case '1': return second[number];
default: return third[numberWithOffset - 2] + (number > 0 ? ' ' + first[number] : '');
}
};
let result = [];

for (let i = numArray.length - 1; i >= 0; i -= 2) {
var el = processNumPart(numArray[i], numArray[i - 1], i, numArray.length);
if (el != '') result.unshift(el);
}

return result.join(' ');
}