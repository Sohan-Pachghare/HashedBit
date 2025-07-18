function digitSum(num) {
    let sum = 0;
    while(num > 0) {
        sum += num % 10;
        num = Math.floor(num/10);
    }
    return sum;
}
function repeatedSum(n) {
    if(Math.floor(n / 10) === 0) {
        return n;
    }
    return repeatedSum(digitSum(n));
}

console.log(repeatedSum(456));