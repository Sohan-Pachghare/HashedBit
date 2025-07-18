function getVowelConsonantCount(str) {
    let arr =[0, 0];
    for(let i=0; i<str.length; i++) {
        let ch = str.charAt(i);
        if(
            (ch >= 'A' && ch <= 'Z') ||
            (ch >= 'a' && ch <= 'z')
        ) {
            if( ch === 'a' || ch === 'e' ||  ch === 'i' || ch === 'o' || ch === 'u' ||
            ch === 'A' || ch === 'E' ||ch === 'I' ||ch === 'O' ||ch === 'U' ) 
            {
                arr[0]++;
            }
            else {
                arr[1]++;
            }
        }
        
    }
    return arr;
}
let count = getVowelConsonantCount("string with minimum 20 characters");

console.log(`vowels = ${count[0]}\nconsonent = ${count[1]}` );