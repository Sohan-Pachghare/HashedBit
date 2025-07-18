function correct(str, wrong, correct) {
    return str.replace(wrong,correct);
}

console.log(correct("hello world", "world", "there"));