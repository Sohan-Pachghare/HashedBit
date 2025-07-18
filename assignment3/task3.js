let string = 'INDIA'

let arr = string.split('');
arr.splice(3,0,'O','N','S');

string = arr.join('');

console.log(string);

