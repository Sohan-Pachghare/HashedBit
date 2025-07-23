function reverseStr(str) {
    let result = "";
    for(let i=str.length-1; i>=0; i--) {
        result += str.charAt(i);
    }
    return result;
}

console.log(reverseStr("Sushma Mam"));