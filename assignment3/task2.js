function reverseWords(str) {
    let reverse = "";
    for(let i=str.length-1; i>=0; i--) {
        let g = i;
        while(g>=-1 && str.charAt(g) != ' '){
            g--;
        }
        reverse += str.substring(g+1, i+1)+' ';
        i = g;
    }
    return reverse.trim();
}

let str = "I love my India";
console.log(reverseWords(str));
