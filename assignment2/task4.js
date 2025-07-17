function correspondingDigitProd(n1, n2) {
    let sum = 0;
    while(n1>0 && n2 >0) {
        let n1Digit = n1%10;
        let n2Digit = n2%10;
        sum += n1Digit * n2Digit;
        n1 = Math.floor(n1/10);
        n2 = Math.floor(n2/10); 
    }
    return sum;
}

console.log(correspondingDigitProd(6,34));